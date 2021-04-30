module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'src/migration/*.ts'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    '@typescript-eslint/no-explicit-any': ['warn'],

    'import/prefer-default-export': ['warn'],

    'class-methods-use-this': ['warn'],
  },
};
