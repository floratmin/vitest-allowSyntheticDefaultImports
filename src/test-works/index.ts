import {Pool} from 'pg';

// does not work:
// import pg from 'pg';
// const {Pool} = pg;

export function connect(connectionString: string) {
    return new Pool({connectionString});
}
