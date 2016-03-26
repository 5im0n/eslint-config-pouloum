/**
 * These are rules designed to prevent you from using deprecated features.
 * @module rules/angular/deprecated-features
 * @see https://github.com/Gillespie59/eslint-plugin-angular#deprecated-angular-features
 */

'use strict';

module.exports = {
  rules: {
    // use $cookies instead of $cookieStore
    'angular/no-cookiestore': 'error',
    //  disallow the deprecated directive replace propert
    'angular/no-directive-replace': 'error',
    // disallow the $http methods success() and error()
    'angular/no-http-callback': 'error'
  }
};
