/**
 * These are rules designed to respect some conventions in your project.
 * @module rules/angular/conventions
 * @see https://github.com/Gillespie59/eslint-plugin-angular#conventions
 */

'use strict';

module.exports = {
  rules: {
    // require a consistent DI syntax
    'angular/di': [2, 'function'],
    // require DI parameters to be sorted alphabetically
    'angular/di-order': [0, true],
    // unittest inject functions should only consist of assignments from injected values to describe block variables
    'angular/dumb-inject': 0,
    // require and specify a consistent function style for components ('named' or 'anonymous')
    'angular/function-type': [2, 'named'],
    // require a consistent order of module dependencies
    'angular/module-dependency-order': 0,
    // use factory() instead of service() (y040)
    'angular/no-service-method': 0,
    // require all DI parameters to be located in their own line
    'angular/one-dependency-per-line': 0,
    // disallow different rest service and specify one of '$http', '$resource', 'Restangular'
    'angular/rest-service': 0,
    // require and specify consistent use $scope.digest() or $scope.apply()
    'angular/watchers-execution': [0, '$digest']
  }
};
