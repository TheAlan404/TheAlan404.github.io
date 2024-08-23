import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{ enforce: 'pre', ...mdx() },
		react(),
		tsconfigPaths(),
	],
})
