'use strict';

module.exports = {
  'extends': [
    'pouloum/configurations/es5',
    'pouloum/rules/ecmascript-6'
  ],
  ecmaFeatures: {
    // Enable arrow functions
    arrowFunctions: true,
    // Enable binary literals
    binaryLiterals: true,
    // Enable let and const (aka block bindings)
    blockBindings: true,
    // Enable classes
    classes: true,
    // Enable default function parameters
    defaultParams: true,
    // Enable destructuring
    destructuring: true,
    // Enable for-of loops
    forOf: true,
    // Enable generators
    generators: true,
    // Enable modules and global strict mode
    modules: true,
    // Enable computed object literal property names
    objectLiteralComputedProperties: true,
    // Enable duplicate object literal properties in strict mode
    objectLiteralDuplicateProperties: true,
    // Enable object literal shorthand methods
    objectLiteralShorthandMethods: true,
    // Enable object literal shorthand properties
    objectLiteralShorthandProperties: true,
    // Enable octal literals
    octalLiterals: true,
    // Enable the regular expression u flag
    regexUFlag: true,
    // Enable the regular expression y flag
    regexYFlag: true,
    // Enable the rest parameters
    restParams: true,
    // Enable the spread operator
    spread: true,
    // Enable super references inside of functions
    superInFunctions: true,
    // Enable template strings
    templateStrings: true,
    // Enable code point escapes
    unicodeCodePointEscapes: true,
    // allow return statements in the global scope
    globalReturn: true,
    // Enable JSX
    jsx: false
  },
  rules: {
     // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 2
  }
};
