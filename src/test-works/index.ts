import {Pool} from 'pg';

export function connect(connectionString: string) {
    return new Pool({connectionString});
}
