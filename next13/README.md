# Next.js (App-Router) 프로젝트 보일러플레이트

Next.js (App-Router) 프로젝트를 위한 보일러플레이트입니다.
필요에 따라 본 보일러플레이트를 적절히 수정해 사용하시면 됩니다. 각 라이브러리는 프로젝트의 개발환경 구성 및 컴포넌트 개발, 코드 스타일 관리 등에 도움을 주는 유용한 도구입니다.

## 기술 스택과 라이브러리

- Nextjs
- TypeScript : 정적 타입 지원 JavaScript 확장 언어
- Eslint : 코드 품질 검사 및 스타일 가이드 적용
- Prettier : 코드 포맷팅 자동화 및 코드 스타일 일관성 유지
- Stylelint : CSS 코드 스타일 통일
- Storybook : UI 컴포넌트 개발 및 테스트
- Scaffdog : 코드 생성 자동화

## 설치

### Next.js (App-router, TypeScript)

```bash
npx create-next-app@lateset

? What is your project named? · my-app
? Would you like to add TypeScript with this project? · Yes
? Would you like to use ESLint with this project? · No
? Would you like to use Tailwind CSS with this project? · No
? Would you like to use the `src/ directory` with this project? · Yes
? What import alias would you like configured? · @
```

### Eslint

```bash
npm i -D eslint
npx eslint --init

√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard-with-typescript
√ What format do you want your config file to be in? · JavaScript
...
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · npm
```

- import문 정렬 관련 라이브러리 추가 설치

```bash
npm i --D eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unused-imports
```

### .vscode/settings.json

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "stylelint.validate": ["css", "scss"],
  "css.validate": false,
  "scss.validate": false,
  "javascript.validate.enable": false,
  "typescript.validate.enable": false
}
```

### Prettier

```bash
npm i -D prettier
touch .prettierrc.js
touch .prettierrcignore
```

- `.prettierrc.js` 내용 작성

```javascript
module.exports = {
  printWidth: 80, // 한 줄 최대 문자열 길이
  tabWidth: 2, // tab 칸 수
  useTabs: false, // space 대신 tab 사용 여부
  semi: true, // 문장 마지막에 세미콜론 사용 여부
  singleQuote: true, // 문자열을 작은 따옴표로 감쌀지 여부
  quoteProps: 'as-needed', // object의 property를 따옴표로 감쌀지 여부
  jsxSingleQuote: false, // JSX 내부 따옴표를 작은 따옴표로 할지 여부
  trailingComma: 'es5', // 행이 여러개인 경우 마지막 행에 쉼표를 넣을지 여부
  bracketSpacing: true, // object literal의 {} 안에 앞뒤 공백을 넣을지 여부
  bracketSameLine: false, // JSX 내부 요소를 닫는 태그를 마지막 줄에 붙여서 표시할지 여부
  arrowParens: 'always', // 화살표 함수의 인자가 1개인 경우 괄호로 감쌀지 여부
};
```

- `.prettierrcignore` 내용 작성

```javascript
*.md
```

- eslint와 prettier 충돌 방지 위한 라이브러리 설치

```bash
npm i -D eslint-config-prettier
```

### Stylelint

```bash
npm i -D stylelint stylelint-config-recess-order stylelint-config-recommended-scss
touch .stylelintrc.js
```

- `.stylelintrc.js` 내용 작성

```javascript
module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    // ::before, ::after 콜론 2개로 고정
    'selector-pseudo-element-colon-notation': 'double',
    // 클래스 명에서 & 사용 금지（&:hover 등은 허용）
    'scss/selector-no-union-class-name': true,
    // 작은 따옴표로 통일
    'string-quotes': 'single',
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
	"eslint:fix": "eslint src --ext .js,jsx,.ts,.tsx --fix",
	"lint:style:fix": "stylelint --fix src/**/*.{css,scss,sass} src/**/*.module.css",
	"prettier:fix": "prettier --check --write src/**/*.{js,jsx,ts,tsx,css,scss,md,mdx}",
	"format": "npm run eslint:fix && npm run lint:style:fix && npm run prettier:fix"
},
```

### Storybook

```bash
npx storybook@latest init

npm run storybook
```

### Scaffdog

```bash
npm i -D scaffdog
npx scaffdog init
# .scaffdog 내부의 마크다운 수정

npx scaffdog generate
```

## 디렉토리 구조

```bash
tree -I "node_modules"
```

```
.
|-- README.md
|-- next-env.d.ts
|-- next.config.js
|-- package-lock.json
|-- package.json
|-- public
|   |-- next.svg
|   `-- vercel.svg
|-- src
|   |-- api
|   |-- app
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.module.css
|   |   `-- page.tsx
|   |-- components
|   |   |-- atoms // 가장 작은 컴포넌트 단위
|   |   |   `-- Button
|   |   |       |-- Button.module.css // 컴포넌트 css 코드
|   |   |       |-- Button.stories.ts // 컴포넌트 storybook
|   |   |       `-- Button.tsx // 컴포넌트 코드
|   |   |-- blocks // atoms의 집합
|   |   `-- templates // 페이지 에서 표시되는 화면 단위
|   |-- const // 프로젝트에서 사용하는 상수값
|   |-- hooks
|   |-- libs
|   `-- types
|       |-- apiTypes.ts // API 호출에 사용되는 타입
|       |-- componentTypes.ts // 컴포넌트 관련 타입
|       |-- enumTypes.ts // 프로젝트 전반에서 사용되는 상수값 enum 타입
|       |-- globalTypes.ts // 프로젝트 전체에서 공통적으로 사용되는 타입
|       `-- index.ts // 타입 정의 export
`-- tsconfig.json
```
