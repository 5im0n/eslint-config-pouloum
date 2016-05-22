/**
 * These are rules designed to respect some naming conventions.
 * @module rules/angular/naming
 * @see https://github.com/Gillespie59/eslint-plugin-angular#naming
 */

'use strict';

module.exports = {
  rules: {
    // require and specify a prefix for all controller names (y123, y124)
    'angular/controller-name': ['error', '/[A-Z].*Controller$/'],
    // require and specify a prefix for all directive names (y073, y126)
    'angular/directive-name': 'off',
    // require and specify a consistent component name pattern
    'angular/file-name': ['off', { nameStyle: 'dash', typeSeparator: 'dot', ignoreTypeSuffix: true, ignorePrefix: 'ui' }],
    // require and specify a prefix for all filter names
    'angular/filter-name': ['off', '/[A-Z].*Filter$/'],
    // require and specify a prefix for all module names (y127)
    'angular/module-name': 'off',
    // require and specify a prefix for all service names (y125)
    'angular/service-name': 'error'
  }
};
