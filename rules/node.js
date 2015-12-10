/**
 * These rules are specific to JavaScript running on Node.js.
 * @module rules/node
 * @see http://eslint.org/docs/rules/#nodejs
 */

'use strict';

module.exports = {
  env: {
    node: true
  },
  rules: {
    // enforce return after a callback
    'callback-return': 0,
    // enforce require() on top-level module scope
    'global-require': 1,
    // Enforces error handling in callbacks (off by default) (on by default in the node environment)
    'handle-callback-err': [2, '^.*(e|E)rr(or)?$'],
    // Disallow mixing regular variable and require declarations
    'no-mixed-requires': 2,
    // Disallow use of new operator with the require function
    'no-new-require': 2,
    // Disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-path-concat': 2,
    // Disallow process.exit() (on by default in the node environment)
    'no-process-exit': 2,
    // Restrict usage of specified node modules (off by default)
    'no-restricted-modules': 0,
    // Disallow use of synchronous methods (off by default)
    'no-sync': 0
  }
};
