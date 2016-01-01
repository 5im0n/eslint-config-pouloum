/**
 * These are rules designed to prevent you from using deprecated features.
 * @module rules/angular/deprecated-features
 * @see https://github.com/Gillespie59/eslint-plugin-angular#deprecated-angular-features
 */

'use strict';

module.exports = {
  rules: {
    // use $cookies instead of $cookieStore
    'angular/no-cookiestore': 2,
    //  disallow the deprecated directive replace propert
    'angular/no-directive-replace': 2,
    // disallow the $http methods success() and error()
    'angular/no-http-callback': 2
  }
};
