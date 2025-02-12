# 贡献指南

> 如果你是开源新人，在阅读本指南前，推荐阅读[GitHub官方入门指南](https://docs.github.com/zh/get-started)

## 贡献代码
请先fork此仓库, 将你的提交推送你fork的仓库，然后使用`Pull Request`(简称PR)功能将代码合并到此仓库的`main`分支，维护者会审查代码。审查通过后，你的代码将合并到`main`分支。

## 提交规范

### 提交消息

- 按照[约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)提交消息
- 如果更新了`packages/core`以及`packages/components`下的内容, 必需指定提交范围。范围参考：

| packages/core | packages/components/[name] |
| --- | --- |
| core | [name] |

### 提交示例

比如更新了`packages/core`的内容, 提交消息应该是
```git
# 也可能是fix/chore/build, 提交类型取决于你提交的内容
feat(core): add some content.
```

如果更新了`packages/components/button`的内容, 提交消息应该是
```git
# 也可能是fix/chore/build, 提交类型取决于你提交的内容
feat(button): add some content.
```
