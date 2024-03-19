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
    // 싱글 쿼테이션으로 통일
    'string-quotes': 'single',
  },
  ignoreFiles: ['**/node_modules/**'],
};
