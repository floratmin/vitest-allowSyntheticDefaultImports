import {describe, vi, it, expect} from 'vitest';
import {connect} from './index';

import {Pool} from 'pg';

vi.mock('pg', async () => {
    const actual = <Record<string, unknown>>await vi.importActual('pg');
    const Pool = vi.fn();
    return {
        ...actual,
        Pool,
    };
});

describe('connect', () => {
    it('should call Pool', () => {
        connect('postgres://...');
        expect(Pool).toBeCalledTimes(1);
    });
});
