import test from 'ava';
import isPlainObj from 'is-plain-obj';

import rulesPossibleErrors from '../rules/angular/possible-errors';
import rulesBestPractices from '../rules/angular/best-practices';
import rulesDeprecatedFeatures from '../rules/angular/deprecated-features';
import rulesNaming from '../rules/angular/naming';
import rulesConventions from '../rules/angular/conventions';
import rulesWrappers from '../rules/angular/wrappers';



/* Angular Rules */

test('Possible errors', t => {
  t.true(isPlainObj(rulesPossibleErrors));
  t.true(isPlainObj(rulesPossibleErrors.rules));
});

Object.keys(rulesPossibleErrors.rules).forEach(a => {
  checkRuleName(a);
});


test('Best Practices', t => {
  t.true(isPlainObj(rulesBestPractices));
  t.true(isPlainObj(rulesBestPractices.rules));
});

Object.keys(rulesBestPractices.rules).forEach(a => {
  checkRuleName(a);
});


test('Deprecated Features', t => {
  t.true(isPlainObj(rulesDeprecatedFeatures));
  t.true(isPlainObj(rulesDeprecatedFeatures.rules));
});

Object.keys(rulesDeprecatedFeatures.rules).forEach(a => {
  checkRuleName(a);
});


test('Naming', t => {
  t.true(isPlainObj(rulesNaming));
  t.true(isPlainObj(rulesNaming.rules));
});

Object.keys(rulesNaming.rules).forEach(a => {
  checkRuleName(a);
});


test('Conventions', t => {
  t.true(isPlainObj(rulesConventions));
  t.true(isPlainObj(rulesConventions.rules));
});

Object.keys(rulesConventions.rules).forEach(a => {
  checkRuleName(a);
});


test('Wrappers', t => {
  t.true(isPlainObj(rulesWrappers));
  t.true(isPlainObj(rulesWrappers.rules));
});

Object.keys(rulesWrappers.rules).forEach(a => {
  checkRuleName(a);
});


/* -------------------- */

function checkRuleName(value) {
  test('Rule name', t => {
    t.true(value.indexOf('angular/') >= 0);
  });
}
