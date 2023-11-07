import { defineConfig } from 'vitest/config';
import {resolve} from 'path';

export default defineConfig({

    build: {
        lib: {
            entry: [
                resolve(__dirname, 'src/test-does-not-work/run-works.ts'), // index.js
                resolve(__dirname, 'src/test-works/run-does-not-work.ts'),
                resolve(__dirname, 'src/test-works-2/run-does-not-work-2.ts'),
            ],
            name: 'vitest-postgres',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['pg'],
        },
    },

    test: {
        environment: 'node',
        include: [
            resolve('src/**/*.spec.ts'),
        ],
    },

});
