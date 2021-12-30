const { join } = require('path');

/**
 * ESLint configuration for TypeScript
 */
module.exports = {
  extends: join(__dirname, 'index.js'),
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/ban-types': ['warn', {
      types: {
        '{}': false,
        'object': false,
        'Number': {
          'message': 'Use the \'number\' type instead',
          'fixWith': 'number'
        },
        'String': {
          'message': 'Use the \'string\' type instead',
          'fixWith': 'string'
        }
      }
    }]
  }
};
