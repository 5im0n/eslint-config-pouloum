/**
 * These rules are specific to JavaScript running on Node.js.
 * @module rules/node
 * @see http://eslint.org/docs/rules/#nodejs
 */

'use strict';

module.exports = {
  rules: {
    // enforce return after a callback
    'callback-return': 'off',
    // enforce require() on top-level module scope
    'global-require': 'warn',
    // Enforces error handling in callbacks (off by default) (on by default in the node environment)
    'handle-callback-err': ['error', '^.*(e|E)rr(or)?$'],
    // Disallow mixing regular variable and require declarations
    'no-mixed-requires': 'error',
    // Disallow use of new operator with the require function
    'no-new-require': 'error',
    // Disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-path-concat': 'error',
    // Disallow process.exit() (on by default in the node environment)
    'no-process-exit': 'error',
    //  restrict usage of specified node imports
    'no-restricted-imports': 'off',
    // Restrict usage of specified node modules (off by default)
    'no-restricted-modules': 'off',
    // Disallow use of synchronous methods (off by default)
    'no-sync': 'off'
  }
};
