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
    ecmaFeatures: {
      // Enable modules and global strict mode
      sourceType: 'module',
      // allow return statements in the global scope
      globalReturn: true,
      // Enable JSX
      jsx: false
    }
  },
  rules: {
     // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 2
  }
};
