import process from 'node:process'
import fs from 'node:fs/promises'
import fsSync from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import minimist from 'minimist'
import prompts, { type PromptObject } from 'prompts'

const cwd = process.cwd()

const questions: PromptObject[] = [
  {
    type: 'text',
    name: 'name',
    message: '为哪个组件创建模版?',
    validate: input => /^\w+$/.test(input) ? true : `至少输入一个字符, 且只能是字母、数字、下划线`,
  },
  {
    type: (prev) => {
      const targetDir = path.join(cwd, 'packages/components', prev)
      return !isEmptyDir(targetDir) ? 'confirm' : false
    },
    name: 'override',
    message: prev => `${prev}已存在, 要覆盖它吗?`,
  },
]

const response = (await prompts(questions)) as { name: string, override?: boolean }

// const arv = minimist<{
//   name: string
// }>(process.argv.splice(2), {
//   alias: {
//     name: 'n',
//   },
// })

const templateDir = path.join(fileURLToPath(import.meta.url), '../..', 'template')
const targetDir = path.join(cwd, 'packages/components', response.name)

const renamedFiles = {
  _gitignore: '.gitignore',
}

function isEmptyDir(path) {
  if (!fsSync.existsSync(path)) {
    return true
  }

  const files = fsSync.readdirSync(path)
  return !files || files?.length === 0
}

async function copyDir(source: string, target: string) {
  await fs.mkdir(target, { recursive: true })

  const files = await fs.readdir(source)
  for (const file of files) {
    const sourcePath = path.join(source, file)
    const targetPath = path.join(target, renamedFiles[file] || file)
    const stat = await fs.stat(sourcePath)

    if (stat.isDirectory()) {
      copyDir(sourcePath, targetPath)
    }
    else {
      await fs.copyFile(sourcePath, targetPath)
    }
  }
}

export async function main() {
  if (!Object.hasOwn(response, 'override') || response.override) {
    await copyDir(templateDir, targetDir)
    console.log(`创建成功`)
  }
  else {
    console.log('无事发生, 退出')
  }
}

main()
