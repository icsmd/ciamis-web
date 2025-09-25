import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	plugins: [vue(), vueDevTools()],
	define: { 'process.env': {} },
	envPrefix: 'CIAMIS_',
	build: {
		minify: 'esbuild',
		sourcemap: false,
		chunkSizeWarningLimit: 5000,
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		host: process.env.CIAMIS_BASE_URL || 'ciamis.infosys.local',
		port: process.env.CIAMIS_BASE_PORT || 3001,
		watch: {
			usePolling: true,
		},
	},
})