import test from 'ava';
import isPlainObj from 'is-plain-obj';

import confES5 from '../configurations/es5';
import confES6 from '../configurations/es6';
import confBrowser from '../configurations/browser';
import confServer from '../configurations/server';
import confAngular from '../configurations/angular';



test('ES5', t => {
  t.true(isPlainObj(confES5));
  t.true(isPlainObj(confES5.env));

  t.true(confES5.extends.indexOf('pouloum/rules/possible-errors') >= 0);
  t.true(confES5.extends.indexOf('pouloum/rules/best-practices') >= 0);
  t.true(confES5.extends.indexOf('pouloum/rules/strict-mode') >= 0);
  t.true(confES5.extends.indexOf('pouloum/rules/variables') >= 0);
  t.true(confES5.extends.indexOf('pouloum/rules/stylistic-issues') >= 0);
});

test('ES6', t => {
  t.true(isPlainObj(confES6));
  t.true(isPlainObj(confES6.rules));
  t.true(isPlainObj(confES6.ecmaFeatures));

  t.true(confES6.extends.indexOf('pouloum/configurations/es5') >= 0);
  t.true(confES6.extends.indexOf('pouloum/rules/ecmascript-6') >= 0);
});

test('Browser', t => {
  t.true(isPlainObj(confBrowser));
  t.true(isPlainObj(confBrowser.rules));

  t.true(confBrowser.env.browser);
  t.false(confBrowser.env.node);
});

test('Server', t => {
  t.true(isPlainObj(confServer));
  t.true(isPlainObj(confServer.rules));

  t.true(confServer.env.node);
  t.false(confServer.env.browser);
  t.true(confServer.extends.indexOf('pouloum/rules/node') >= 0);
});

test('Angular', t => {
  t.true(isPlainObj(confAngular));

  t.true(confAngular.plugins.indexOf('angular') >= 0);
  t.true(confAngular.extends.indexOf('pouloum/rules/angular/possible-errors') >= 0);
  t.true(confAngular.extends.indexOf('pouloum/rules/angular/best-practices') >= 0);
  t.true(confAngular.extends.indexOf('pouloum/rules/angular/deprecated-features') >= 0);
  t.true(confAngular.extends.indexOf('pouloum/rules/angular/naming') >= 0);
  t.true(confAngular.extends.indexOf('pouloum/rules/angular/conventions') >= 0);
  t.true(confAngular.extends.indexOf('pouloum/rules/angular/wrappers') >= 0);
  t.true(confAngular.extends.indexOf('pouloum/configurations/browser') >= 0);
});
