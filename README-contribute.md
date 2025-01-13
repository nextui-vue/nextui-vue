## 提交规范

- 按照[约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)提交消息
- 如果更新了`packages/core`以及`packages/components`下的内容, 必需指定提交范围。范围参考：

| packages/core | packages/components/[name] |
| --- | --- |
| core | [name] |

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

