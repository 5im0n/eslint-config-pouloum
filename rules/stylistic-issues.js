/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylistic-issues
 * @see http://eslint.org/docs/rules/#stylistic-issues
 */

'use strict';

module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // disallow or enforce spaces inside of single line blocks (fixable)
    'block-spacing': [2, 'always'],
    // enforce one true brace style
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // require camel case names
    camelcase: [2, { properties: 'never' }],
    // enforce spacing before and after comma
    'comma-spacing': [2, { before: false, after: true }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 0,
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require function expressions to have a name
    'func-names': 0,
    // enforces use of function declarations or expressions
    'func-style': [1, 'declaration'],
    // blacklist certain identifiers to prevent them being used
    'id-blacklist': [2, 'e', 'cb'],
    // enforce this rules this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': [0, { min: 2, properties: 'never', exceptions: ['i'] }],
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // this option sets a specific tab width for your code
    indent: [2, 2],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 2,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [0, { align: 'colon', beforeColon: false, afterColon: true }],
    // enforce spacing before and after keywords
    'keyword-spacing': [2, {'before': true, 'after': true, 'overrides': {}}],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 1,
    // enforces empty lines around comments
    'lines-around-comment': 0,
    // specify the maximum depth that blocks can be nested
    'max-depth': [1, 4],
    // specify the maximum length of a line in your program
    'max-len': [2, 130, 4],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [1, 4],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': 0,
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 15],
    // require a capital letter for constructors
    'new-cap': [2, { newIsCap: true }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 1,
    // allow/disallow an empty newline after var statement
    'newline-after-var': [0, 'always'],
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': [2, { 'ignoreChainWithDepth': 2 }], // TODO
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow use of bitwise operators
    'no-bitwise': 2,
    // disallow use of the continue statement
    'no-continue': 1,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow if as the only statement in an else block
    'no-lonely-if': 1,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, { max: 3, maxEOF: 1 }],
    // disallow negated conditions
    'no-negated-condition': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 0,
    // disallow use of certain syntax in code
    'no-restricted-syntax': [2, 'WithStatement'],
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 1,
     // disallow whitespace before properties
    'no-whitespace-before-property': 2,
    // require or disallow padding inside curly braces
    'object-curly-spacing': [1, 'always', { objectsInObjects: false, arraysInObjects: true }],
    // allow just one var statement per function
    'one-var': [2, 'never'],
     // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': 2,
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': [1, 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': [2, 'after'],
    // maybe enforce - enforce padding within blocks
    'padded-blocks': [0, 'never'],
    // require quotes around object literal property names
    'quote-props': [2, 'as-needed', { keywords: true }],
    // specify whether double or single quotes should be used
    quotes: [2, 'single', 'avoid-escape'],
    // require JSDoc comment
    'require-jsdoc': 0,
    // require or disallow use of semicolons instead of ASI
    semi: [2, 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, { before: false, after: true }],
    // sort import declarations within module
    'sort-imports': 0,
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],
    // require spaces around operators
    'space-infix-ops': 2,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 2,
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!'] // space here to support sprockets directives
    }],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0
  }
};
