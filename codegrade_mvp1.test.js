import MutationObserver from 'mutationobserver-shim';

import '@testing-library/jest-dom/extend-expect'

test('Is the latest version of the project', () => {
  const pjson = require('./package.json')
  expect(pjson.version).toBe('0.0.1')
});
