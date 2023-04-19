/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        // Disable the watch mode for execute only once the test if it changes
        watch: false,
        // The default timeout for the test if of 10 seconds
        testTimeout: 20_000,
        // Used for load the enviroment variables
        setupFiles: './test/setup.ts',
    },
})