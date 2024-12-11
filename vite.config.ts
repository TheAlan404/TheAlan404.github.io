import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import tsconfigPaths from 'vite-tsconfig-paths'
import { reactRouter } from "@react-router/dev/vite";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// { enforce: 'pre', ...mdx() },
		reactRouter(),
		tsconfigPaths(),
	],
	resolve: {
		alias: {
			'@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
		},
	},
})
