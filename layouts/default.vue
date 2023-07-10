<template>
	<div class="layout-container">
		<NavTop />
		<!-- <Preload v-if="isPreload" /> -->

		<div class="layout-body">
			<NuxtPage :transition="{ name: 'fade', mode: 'out-in' }" />
		</div>
		<!-- <div class="contact-container"> -->
		<!-- 	<ContactFloat /> -->
		<!-- </div> -->
	</div>
</template>

<script setup>
useHead({ title: 'pagina pinturas' })
// import Preload from '~/components/shared/Preload.vue'
import NavTop from '~/components/layout/NavTop.vue'
import ContactFloat from '~/components/layout/ContactFloat.vue'

let isPreload = ref(true)
</script>

<style scoped>
.layout-container {
	--at-apply: flex flex-col relative p-0 m-0 min-h-full;
}

.layout-body {
	/* height:  calc(100vh - 60px); */
	--at-apply: flex min-h-full;
}

.contact-container {
	--at-apply: fixed bottom-5% sm:bottom-40%;
	--at-apply: shadow-2xl bg-white rounded-xl;
}
</style>
