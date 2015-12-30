/**
 * These are rules designed to prevent you from making mistakes.
 * @module rules/angular/best-practices
 * @see https://github.com/Gillespie59/eslint-plugin-angular#best-practices
 */

'use strict';

module.exports = {
  rules: {
    // limit the number of angular components per file
    'angular/component-limit': [0, 1],
    // disallow assignments to $scope in controllers
    'angular/controller-as': 2,
    // require the use of controllerAs in routes or states
    'angular/controller-as-route': 2,
    // require and specify a capture variable for this in controllers
    'angular/controller-as-vm': [2, 'vm'],
    // use $q(function(resolve, reject){}) instead of $q.deferred
    'angular/deferred': 0,
    // disallow unused DI parameters
    'angular/di-unused': 2,
    // disallow any other directive restrict than 'A' or 'E'
    'angular/directive-restrict': 2,
    // disallow empty controllers
    'angular/empty-controller': 1,
    // disallow use of controllers (according to the component first pattern)
    'angular/no-controller': 0,
    // disallow the use of inline templates
    'angular/no-inline-template': 2,
    // keep run functions clean and simple (y171)
    'angular/no-run-logic': [0, { allowParams: true }],
    // disallow DI of specified services for other angular components ($http for controllers, filters and directives)
    'angular/no-services': [2, ['$http', '$resource', 'Restangular']],
    // require $on and $watch deregistration callbacks to be saved in a variable
    'angular/on-watch': 2
  }
};
