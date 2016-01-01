'use strict';

module.exports = {
  plugins: [
    'angular'
  ],
  'extends': [
    'pouloum/rules/angular/possible-errors',
    'pouloum/rules/angular/best-practices',
    'pouloum/rules/angular/deprecated-features',
    'pouloum/rules/angular/naming',
    'pouloum/rules/angular/conventions',
    'pouloum/rules/angular/wrappers',
    'pouloum/configurations/browser'
  ]
};
