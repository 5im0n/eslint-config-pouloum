/**
 * These are rules designed to help you enforcing the usage of angular wrappers.
 * @module rules/angular/naming
 * @see https://github.com/Gillespie59/eslint-plugin-angular#angular-wrappers
 */

'use strict';

module.exports = {
  rules: {
    // use angular.element instead of $ or jQuery
    'angular/angularelement': 'warn',
    // use angular.isDefined and angular.isUndefined instead of other undefined checks
    'angular/definedundefined': 'error',
    // use $document instead of document (y180)
    'angular/document-service': 'error',
    // use angular.forEach instead of native Array.prototype.forEach
    'angular/foreach': 'off',
    // use $interval instead of setInterval (y181)
    'angular/interval-service': 'error',
    // use angular.fromJson and 'angular.toJson' instead of JSON.parse and JSON.stringify
    'angular/json-functions': 'error',
    // use the $log service instead of the console methods
    'angular/log': 'error',
    // require to use angular.mock methods directly
    'angular/no-angular-mock': 'off',
    // disallow to wrap angular.element objects with jQuery or $
    'angular/no-jquery-angularelement': 'error',
    // use $timeout instead of setTimeout (y181)
    'angular/timeout-service': 'error',
    // use angular.isArray instead of typeof comparisons
    'angular/typecheck-array': 'error',
    // use angular.isDate instead of typeof comparisons
    'angular/typecheck-date': 'error',
    // use angular.isFunction instead of typeof comparisons
    'angular/typecheck-function': 'error',
    // use angular.isNumber instead of typeof comparisons
    'angular/typecheck-number': 'error',
    // use angular.isObject instead of typeof comparisons
    'angular/typecheck-object': 'error',
    // use angular.isString instead of typeof comparisons
    'angular/typecheck-string': 'error',
    // use $window instead of window
    'angular/window-service': 'error'
  }
};
