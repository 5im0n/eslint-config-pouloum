import test from 'ava';
import isPlainObj from 'is-plain-obj';

import rulesPossibleErrors from '../rules/possible-errors';
import rulesBestPractices from '../rules/best-practices';
import rulesStrictMode from '../rules/strict-mode';
import rulesVariables from '../rules/variables';
import rulesStylisticIssues from '../rules/stylistic-issues';
import rulesEcmaScript6 from '../rules/ecmascript-6';
import rulesNode from '../rules/node';


/* Rules */

test('Best Practices', t => {
  t.true(isPlainObj(rulesBestPractices));
  t.true(isPlainObj(rulesBestPractices.rules));
});

test('Ecmascript-6', t => {
  t.true(isPlainObj(rulesEcmaScript6));
  t.true(isPlainObj(rulesEcmaScript6.rules));
});

test('Node.js', t => {
  t.true(isPlainObj(rulesNode));
  t.true(isPlainObj(rulesNode.rules));
});

test('Possible errors', t => {
  t.true(isPlainObj(rulesPossibleErrors));
  t.true(isPlainObj(rulesPossibleErrors.rules));
});

test('Strict mode', t => {
  t.true(isPlainObj(rulesStrictMode));
  t.true(isPlainObj(rulesStrictMode.rules));
});

test('Stylistic issues', t => {
  t.true(isPlainObj(rulesStylisticIssues));
  t.true(isPlainObj(rulesStylisticIssues.rules));
});

test('Variables', t => {
  t.true(isPlainObj(rulesVariables));
  t.true(isPlainObj(rulesVariables.rules));
});
