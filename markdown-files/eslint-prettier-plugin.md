### 使用 Prettier

- 使用 `Eslint` 运行 `Prettier` (需要使用`eslint-plugin-prettier`来添加`Prettier`作为`Eslint`的规则配置)
- 安装 `yarn add eslint-plugin-prettier`
- 配置 `.eslintrc.js`
```js
module.exports = {
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
- 如果 `eslintrc`配置的`rules`与`Prettier`配置的`rules`冲突
- 安装 `yarn add eslint-config-prettier`
- 配置 `.eslintrc.js`
```js
module.exports = {
  "extends": ["standard","prettier"]
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```