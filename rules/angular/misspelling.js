/**
 * hese rules help you avoiding misspellings.
 * @module rules/angular/mispelling
 * @see https://github.com/Gillespie59/eslint-plugin-angular#mispelling
 */

'use strict';

module.exports = {
  rules: {
    // Check for common misspelling $on('destroy', ...).
    'angular/on-destroy': 'error'
  }
};
