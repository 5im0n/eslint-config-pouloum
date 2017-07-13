/**
 * These rules are purely matters of style and are quite subjective.
 * @module rules/stylistic-issues
 * @see http://eslint.org/docs/rules/#stylistic-issues
 */

'use strict';

module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // disallow or enforce spaces inside of single line blocks (fixable)
    'block-spacing': ['error', 'always'],
    // enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // require camel case names
    camelcase: ['error', { properties: 'never' }],
    // enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],
    // enforce one true comma style
    'comma-style': ['error', 'last'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'error',
    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': ['off', 'never'],
    // require function expressions to have a name
    'func-names': ['warn', 'always'],
    // enforces use of function declarations or expressions
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    // blacklist certain identifiers to prevent them being used
    'id-blacklist': ['error', 'e', 'cb'],
    // enforce this rules this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': ['off', { min: 2, properties: 'never', exceptions: ['i'] }],
    // require identifiers to match the provided regular expression
    'id-match': 'off',
    // this option sets a specific tab width for your code
    indent: ['error', 2, { SwitchCase: 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 'error',
    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['off', { align: 'colon', beforeColon: false, afterColon: true }],
    // enforce spacing before and after keywords
    'keyword-spacing': ['error', { before: true, after: true, overrides: {}}],
    // enforce position of line comments
    'line-comment-position': ['off', {
      position: 'above',
      applyDefaultPatterns: true
    }],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 'warn',
    // enforces empty lines around comments
    'lines-around-comment': 'off',
    // specify the maximum depth that blocks can be nested
    'max-depth': ['warn', 4],
    // specify the maximum length of a line in your program
    'max-len': ['error', 130, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    // enforce a maximum number of lines per file
    'max-lines': ['error', { max: 400, skipComments: true }],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': ['warn', 4],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 10],
    // specify the maximum number of statement allowed in a function
    'max-statements': ['warn', { max: 15 }, { ignoreTopLevelFunctions: true }],
    // specify the maximum number of statements allowed per line
    'max-statements-per-line': ['error', { max: 2 }],
    // enforce newlines between operands of ternary expressions
    'multiline-ternary': ['off', 'never'],
    // require a capital letter for constructors
    'new-cap': ['error', { newIsCap: true }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'warn',
    // allow/disallow an empty newline after var statement
    'newline-after-var': ['off', 'always'],
    // require newline before return statement
    'newline-before-return': 'error',
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': ['off', { ignoreChainWithDepth: 4 }],
    // disallow use of the Array constructor
    'no-array-constructor': 'error',
    // disallow use of bitwise operators
    'no-bitwise': 'error',
    // disallow use of the continue statement
    'no-continue': 'warn',
    // disallow comments inline after code
    'no-inline-comments': 'off',
    // disallow if as the only statement in an else block
    'no-lonely-if': 'warn',
    // disallow mixed binary operators
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 1 }],
    // disallow negated conditions
    'no-negated-condition': 'error',
    // disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // disallow use of the Object constructor
    'no-new-object': 'error',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',
    // disallow use of certain syntax in code
    'no-restricted-syntax': ['error', 'WithStatement'],
    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],
    // disallow all tabs
    'no-tabs': 'error',
    // disallow the use of ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 'warn',
    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // enforce consistent line breaks inside braces
    'object-curly-newline': ['error', { multiline: true }],
    // require or disallow padding inside curly braces
    'object-curly-spacing': ['warn', 'always', { objectsInObjects: false, arraysInObjects: true }],
    // enforce placing object properties on separate lines
    'object-property-newline': ['warn', { allowMultiplePropertiesPerLine: true }],
    // allow just one var statement per function
    'one-var': ['error', 'never'],
    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': 'error',
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['warn', 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': ['error', 'after'],
    // maybe enforce - enforce padding within blocks
    'padded-blocks': ['off', 'never'],
    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed', { keywords: true }],
    // specify whether double or single quotes should be used
    quotes: ['error', 'single', 'avoid-escape'],
    // require JSDoc comment
    'require-jsdoc': 'off',
    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],
    // sort import declarations within module
    'sort-imports': 'off',
    // require symbol descriptions
    'symbol-description': 'error',
    // require object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
    // sort variables within the same declaration block
    'sort-vars': 'off',
    // require or disallow space before blocks
    'space-before-blocks': 'error',
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],
    // require spaces around operators
    'space-infix-ops': 'error',
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 'error',
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'] // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true
      }
    }],
    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'off',
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
  }
};
