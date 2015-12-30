/**
 * These are rules designed to help you enforcing the usage of angular wrappers.
 * @module rules/angular/naming
 * @see https://github.com/Gillespie59/eslint-plugin-angular#angular-wrappers
 */

'use strict';

module.exports = {
  rules: {
    // use angular.element instead of $ or jQuery
    'angular/angularelement': 1,
    // use angular.isDefined and angular.isUndefined instead of other undefined checks
    'angular/definedundefined': 2,
    // use $document instead of document (y180)
    'angular/document-service': 2,
    // use angular.forEach instead of native Array.prototype.forEach
    'angular/foreach': 0,
    // use $interval instead of setInterval (y181)
    'angular/interval-service': 2,
    // use angular.fromJson and 'angular.toJson' instead of JSON.parse and JSON.stringify
    'angular/json-functions': 2,
    // use the $log service instead of the console methods
    'angular/log': 2,
    // require to use angular.mock methods directly
    'angular/no-angular-mock': 0,
    // disallow to wrap angular.element objects with jQuery or $
    'angular/no-jquery-angularelement': 2,
    // use $timeout instead of setTimeout (y181)
    'angular/timeout-service': 2,
    // use angular.isArray instead of typeof comparisons
    'angular/typecheck-array': 2,
    // use angular.isDate instead of typeof comparisons
    'angular/typecheck-date': 2,
    // use angular.isFunction instead of typeof comparisons
    'angular/typecheck-function': 2,
    // use angular.isNumber instead of typeof comparisons
    'angular/typecheck-number': 2,
    // use angular.isObject instead of typeof comparisons
    'angular/typecheck-object': 2,
    // use angular.isString instead of typeof comparisons
    'angular/typecheck-string': 2,
    // use $window instead of window
    'angular/window-service': 2
  }
};
