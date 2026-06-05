const js = require('@eslint/js');
const globals = require('globals');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      '.git/**',
      '.openapi-generator/**',
      'apis/**',
      'models/**',
      'samples/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'no-constant-binary-expression': 'warn',
    },
  },
  eslintConfigPrettier,
];
