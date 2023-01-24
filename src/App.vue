<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import links from '@/data/links.json'

const getImgURL = (src: string) => new URL(`./assets/svg/${src}.svg`, import.meta.url).href
</script>

<template>
	<a v-for="{ alt, src, href } in links" :key="alt" class="logo-link" :href="href">
		<img class="logo" :alt="alt" :src="getImgURL(src)" />
	</a>
	<HelloWorld msg="Hello World" />
</template>

<style lang="scss">
@use '@/styles/functions/color' as *;

body {
	background-color: color(light);
	color: color(dark);

	@media (prefers-color-scheme: dark) {
		background-color: color(dark);
		color: color(light);
	}
}

#app {
	text-align: center;
	margin-top: 60px;
}
</style>

<style lang="scss" scoped>
@use '@/styles/functions/color' as *;

.logo {
	height: 56px;
	width: 56px;
}

.logo-link {
	background: darken(color(light), 35%);
	border-radius: 50%;
	padding: 8px;

	@media (prefers-color-scheme: dark) {
		background: darken(color(dark), 5%);
	}

	& + .logo-link {
		margin-left: 16px;
	}
}
</style>
