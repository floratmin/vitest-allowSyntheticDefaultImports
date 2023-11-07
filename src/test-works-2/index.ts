import * as pg from 'pg';
const {Pool} = pg;

export function connect(connectionString: string) {
    return new Pool({connectionString});
}
