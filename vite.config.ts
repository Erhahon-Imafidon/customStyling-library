import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PurgeCSS from 'vite-plugin-purgecss';
import type { Plugin } from 'vite';

export default defineConfig({
    plugins: [
        react(),
        PurgeCSS({
            content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
        }) as unknown as Plugin,
    ],
    css: {
        postcss: {},
    },
});
