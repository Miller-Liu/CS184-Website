import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/CS184-Website/',
    plugins: [
        tailwindcss(),
    ],
})