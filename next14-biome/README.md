# BoilerPlate (Next.js + Biome)

## 설치

### Next.js (App-router, TypeScript)

```bash
npx create-next-app@lateset

? What is your project named? · my-app
? Would you like to add TypeScript with this project? · No
? Would you like to use ESLint with this project? · No
? Would you like to use Tailwind CSS with this project? · No
? Would you like to use the `src/ directory` with this project? · No
? What import alias would you like configured? · @
```

### Biome

```bash
npm install --save-dev --save-exact @biomejs/biome
```

```bash
npx @biomejs/biome init
```

### .vscode/settings.json

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.addMissingImports": true,
    "quickfix.biome": true,
    "source.organizeImports.biome": true,
    "source.fixAll.stylelint": true
  },
  "javascript.validate.enable": false,
  "typescript.validate.enable": false, // "javascript.preferences.importModuleSpecifier": "non-relative", // "typescript.preferences.importModuleSpecifier": "non-relative", // "typescript.tsdk": "node_modules/typescript/lib", // "typescript.enablePromptUseWorkspaceTsdk": true,

  "stylelint.validate": ["css", "scss"],
  "css.validate": false,
  "scss.validate": false
}
```

### Stylelint

```shell
npm i -D stylelint stylelint-config-recess-order stylelint-config-standard
touch .stylelintrc.js
```

css modules 사용할 경우 `npm i -D stylelint-config-css-modules` 추가

```js title=".stylelintrc.js"
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'selector-pseudo-element-colon-notation': 'double',
    'order/order': ['custom-properties', 'declarations'],
  },
  ignoreFiles: ['**/node_modules/**'],
};
```

### package.json

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "lint:style": "stylelint src/**/*.{css,scss,sass} src/**/*.module.css",
  "lint:style:fix": "stylelint --fix src/**/*.{css,scss,sass} src/**/*.module.css",
  "biome:check": "biome check --apply .",
  "biome:check:fix": "biome check --apply-unsafe .",
  "format": "npm run biome:check:fix && npm run lint:style:fix"
  },
```

## 디렉토리 구조

```bash
npm i -g tree-cli
```

```bash
tree -I "node_modules"
```

```bash
\my-app
├── app
├── biome.json
├── components
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── public
├── README.md
├── styles
└── tsconfig.json
```
