// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@unocss/nuxt',
		'nuxt-icons',
		'@nuxt/image-edge'
	],
	css: [
		'~/assets/styles/app.css'
	],
})
