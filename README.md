### Mocking with `allowSyntheticDefaultImports`

Run `npm test`, than the tests in the folders `test-works` and `test-works-2` run successfully. The test in the folder `test-does-not-work` fails.

After running `npm build`:

* `node dist/run-works.js` runs
* `node dist/run-does-not-work.js` throws
* `node dist/run-does-not-work-2.js` throws

Fix (thanks to [@sheremet-va](https://github.com/vitest-dev/vitest/issues/4454)):
```ts
import {describe, vi, it, expect} from 'vitest';
import {connect} from './index';
import pg from 'pg';
const {Pool} = pg;

vi.mock('pg', async () => {
    const actual = <Record<string, unknown>>await vi.importActual('pg');

    return {
        ...actual,
        default: {
            Pool: vi.fn(),
        }
    };
});

describe('connect', () => {
    it('should call Pool', () => {
        connect('postgres://...');
        expect(Pool).toBeCalledTimes(1);
    });
});
```
