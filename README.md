### Mocking with `allowSyntheticDefaultImports`

Run `npm test`, than the tests in the folders `test-works` and `test-works-2` run successfully. The test in the folder `test-does-not-work` fails.

After running `npm build`:

* `node dist/run-works.js` runs
* `node dist/run-does-not-work.js` throws
* `node dist/run-does-not-work-2.js` throws
