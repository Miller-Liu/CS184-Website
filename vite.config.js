import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import fg from 'fast-glob';
import path from 'path'

export default defineConfig({
    base: '/CS184-Website/',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: Object.fromEntries(
                fg.sync(['index.html', 'hw*/index.html', 'final_project/**/index.html']).map(file => {
                    const name = file.replace(/\.html$/, '') // Remove .html
                    return [name, path.resolve(__dirname, file)]
                })
            )
        }
    }
})