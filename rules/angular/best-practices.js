/**
 * These are rules designed to prevent you from making mistakes.
 * @module rules/angular/best-practices
 * @see https://github.com/Gillespie59/eslint-plugin-angular#best-practices
 */

'use strict';

module.exports = {
  rules: {
    // limit the number of angular components per file
    'angular/component-limit': ['off', 1],
    // require the use of controllerAs in routes or states
    'angular/controller-as-route': 'error',
    // require and specify a capture variable for this in controllers
    'angular/controller-as-vm': ['error', 'vm'],
    // disallow assignments to $scope in controllers
    'angular/controller-as': 'error',
    // use $q(function(resolve, reject){}) instead of $q.deferred
    'angular/deferred': 'error',
    // disallow unused DI parameters
    'angular/di-unused': 'error',
    // disallow any other directive restrict than 'A' or 'E'
    'angular/directive-restrict': 'error',
    // disallow empty controllers
    'angular/empty-controller': 'warn',
    // disallow use of controllers (according to the component first pattern)
    'angular/no-controller': 'off',
    // disallow the use of inline templates
    'angular/no-inline-template': 'error',
    // keep run functions clean and simple (y171)
    'angular/no-run-logic': ['error', { allowParams: true }],
    // disallow DI of specified services for other angular components ($http for controllers, filters and directives)
    'angular/no-services': ['error', ['$http', '$resource', 'Restangular']],
    // require $on and $watch deregistration callbacks to be saved in a variable
    'angular/on-watch': 'error',
    // prefer component
    'angular/prefer-component': 'warn'
  }
};
