/**
 * These rules are only relevant to ES6 environments and are off by default.
 * @module rules/ecmascript-6
 * @see http://eslint.org/docs/rules/#ecmascript-6
 * @see http://eslint.org/docs/user-guide/configuring
 */

'use strict';

module.exports = {
  rules: {
    // require braces in arrow function body
    'arrow-body-style': ['error', 'as-needed'],
    // Require parens in arrow function arguments
    'arrow-parens': ['error', 'as-needed'],
    // Require space before/after arrow function's arrow (fixable)
    'arrow-spacing': 'error',
    // Verify super() callings in constructors
    'constructor-super': 'error',
    // Enforce the spacing around the * in generator functions
    'generator-star-spacing': ['error', 'after'],
    // Disallow modifying variables of class declarations
    'no-class-assign': 'error',
    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', { allowParens: true }],
    // Disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // Disallow duplicate name in class members
    'no-dupe-class-members': 'error',
    // disallow duplicate module imports
    'no-duplicate-imports': ['error', { includeExports: true }],
    // disallow use of the new operator with the Symbol object
    'no-new-symbol': 'error',
    // Disallow to use this/super before super() calling in constructors. (off by default)
    'no-this-before-super': 'error',
    // disallow unnecessary constructor
    'no-useless-constructor': 'error',
    // Require let or const instead of var (off by default)
    'no-var': 'error',
    // Require method and property shorthand syntax for object literals (off by default)
    'object-shorthand': ['error', 'always'],
    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'off',
    // Suggest using const declaration for variables that are never modified after declared
    'prefer-const': ['error', { destructuring: 'any' }],
    // Suggest using Reflect methods where applicable
    'prefer-reflect': 'off',
    // Suggest using the rest parameters instead of arguments
    'prefer-rest-params': 'error',
    // Suggest using the spread operator instead of .apply().
    'prefer-spread': 'error',
    // Suggest using template literals instead of strings concatenation
    'prefer-template': 'error',
    // Disallow generator functions that do not have yield
    'require-yield': 'error',
    // Enforce spacing around embedded expressions of template strings
    'template-curly-spacing': ['error', 'never'],
    // Enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'before']
  }
};
