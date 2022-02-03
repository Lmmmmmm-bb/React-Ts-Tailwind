![[object Object]](https://socialify.git.ci/Lmmmmmm-bb/React-Ts-Tailwind/image?description=1&theme=Light)

<p align="center">
<a href="https://github.com/Lmmmmmm-bb/React-Ts-Tailwind"><img alt="GitHub license" src="https://img.shields.io/github/license/Lmmmmmm-bb/React-Ts-Tailwind"></a>
<a href="http://commitizen.github.io/cz-cli"><img alt="Commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
<a href="https://github.com/Lmmmmmm-bb/React-Ts-Tailwind/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Lmmmmmm-bb/React-Ts-Tailwind"></a>
<a href="https://github.com/Lmmmmmm-bb/React-Ts-Tailwind/pulls"><img alt="GitHub PR" src="https://img.shields.io/badge/PR-Welcome-%2345A2FF"></a>
</p>

## 主要模块

- React
- React-Router-DOM
- Typescript
- Scss
- Tailwind CSS

改造 `create-react-app` 创建的项目，添加了 `Scss`，`Tailwind CSS` 支持。

## 代码风格检查和格式化

支持 `Eslint`，`Prettier` 和 `EditorConfig` 进行代码检查和格式化。

可以根据自己需要修改各项配置。

## Commit 检查

支持 `Commitlint` 和定制 Commit 信息，可使用 `npm run commit` 代替 `git commit` 进行提交。

可以通过修改 `.cz-config.js` 来对提示信息进行定制。

## Scss 样式隔离

依赖 Typed-Scss-Modules 进行样式隔离，但有以下限制。

1. 需要将文件名命名为 `*.module.scss`。
2. 文件名为 `index.scss` 的 Scss 文件将被忽略，不会自动生成 `.scss.d.ts` 文件。
3. Scss 文件的类名命名需要使用小驼峰命名法。

**如果有定制化需求可以根据 [typed-scss-modules 文档](https://github.com/skovy/typed-scss-modules) 对规则进行调整。**

### 样式隔离如何使用

```tsx
import styles from './index.module.scss';
export default <div className={styles.main}>Main</div>;
```

### 可能遇到的问题

#### `index.module.scss` 配合 Tailwind CSS 使用 `@apply` 时提示 `Unknown at rule`

在 VSCode 中的方法是 `setting.json` 中设置 `"scss.lint.unknownAtRules": "ignore"`，如果有更好的办法欢迎提 `PR` 或 `issue`。
