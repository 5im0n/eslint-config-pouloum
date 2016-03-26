'use strict';

module.exports = {
  'extends': [
    'pouloum/configurations/es5',
    'pouloum/rules/ecmascript-6'
  ],
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      // allow return statements in the global scope
      globalReturn: true,
      // Enable JSX
      jsx: false
    }
  },
  rules: {
     // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error'
  }
};
