import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig(() => ({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@c': resolve(__dirname, 'src/components'),
		},
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['vitest.setup.ts'],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/boot.scss" as *;`,
			},
		},
	},
	server: { port: 8080 },
}))
