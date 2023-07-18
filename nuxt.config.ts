// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	image: {
    dir: 'assets/images',
		provider: 'ipx'
  },
	modules: [
		'@unocss/nuxt',
		'nuxt-icons',
		'@nuxt/image-edge'
	],
	css: [
		'~/assets/styles/app.css'
	],
})
