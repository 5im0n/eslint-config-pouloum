/**
 * The following rules point out areas where you might have made mistakes.
 * @module rules/angular/possible-errors
 * @see https://github.com/Gillespie59/eslint-plugin-angular#possible-errors
 */

'use strict';

module.exports = {
  rules: {
    // disallow to reference modules with variables and require to use the getter syntax instead
    'angular/module-getter': 2,
    // disallow to assign modules to variables
    'angular/module-setter': 2,
    //  disallow use of internal angular properties prefixed with $$
    'angular/no-private-call': 2
  }
};
