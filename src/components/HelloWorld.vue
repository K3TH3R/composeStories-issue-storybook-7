<script setup lang="ts">
import BasicButton from '@c/BasicButton'
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
	<h1>{{ msg }}</h1>
	<h2>Setup</h2>
	<p>
		<a href="https://code.visualstudio.com/">VSCode</a>
		+
		<a href="https://github.com/johnsoncodehk/volar">Volar</a>
	</p>

	<h2>Docs</h2>
	<p>
		<a href="https://vitejs.dev/guide/features.html"> Vite </a>
		|
		<a href="https://v3.vuejs.org/">Vue 3</a>
		|
		<a href="https://storybook.js.org/docs/vue/get-started/introduction"> Storybook </a>
		|
		<a href="https://www.typescriptlang.org/docs/"> Typescript </a>
		|
		<a href="https://eslint.org/docs/user-guide/"> ESLint </a>
		|
		<a href="https://prettier.io/docs/en/index.html"> Prettier </a>
	</p>

	<basic-button size="small" @click="count++" label="Count" />
</template>

<style lang="scss" scoped>
@use '@/styles/functions/color' as *;

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
