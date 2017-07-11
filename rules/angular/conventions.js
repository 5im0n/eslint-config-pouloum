/**
 * These are rules designed to respect some conventions in your project.
 * @module rules/angular/conventions
 * @see https://github.com/Gillespie59/eslint-plugin-angular#conventions
 */

'use strict';

module.exports = {
  rules: {
    // require DI parameters to be sorted alphabetically
    'angular/di-order': ['off', true],
    // require a consistent DI syntax
    'angular/di': ['error', 'function'],
    // unittest inject functions should only consist of assignments from injected values to describe block variables
    'angular/dumb-inject': 'off',
    // require and specify a consistent function style for components ('named' or 'anonymous')
    'angular/function-type': ['error', 'named'],
    // require a consistent order of module dependencies
    'angular/module-dependency-order': 'off',
    // use factory() instead of service() (y040)
    'angular/no-service-method': 'off',
    // require all DI parameters to be located in their own line
    'angular/one-dependency-per-line': 'off',
    // disallow different rest service and specify one of '$http', '$resource', 'Restangular'
    'angular/rest-service': 'off',
    // require and specify consistent use $scope.digest() or $scope.apply()
    'angular/watchers-execution': ['off', '$digest']
  }
};
