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
