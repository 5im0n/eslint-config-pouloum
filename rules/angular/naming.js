/**
 * These are rules designed to respect some naming conventions.
 * @module rules/angular/naming
 * @see https://github.com/Gillespie59/eslint-plugin-angular#naming
 */

'use strict';

module.exports = {
  rules: {
    // require and specify a prefix for all controller names (y123, y124)
    'angular/controller-name': [2, '/[A-Z].*Controller$/'],
    // require and specify a prefix for all directive names (y073, y126)
    'angular/directive-name': 0,
    // require and specify a consistent component name pattern
    'angular/file-name': [0, { nameStyle: 'dash', typeSeparator: 'dot', ignoreTypeSuffix: true, ignorePrefix: 'ui' }],
    // require and specify a prefix for all filter names
    'angular/filter-name': [2, '/[A-Z].*Filter$/'],
    // require and specify a prefix for all module names (y127)
    'angular/module-name': 0,
    // require and specify a prefix for all service names (y125)
    'angular/service-name': 2
  }
};
