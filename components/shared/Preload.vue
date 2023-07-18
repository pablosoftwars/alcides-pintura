<template>
	<div id="preload-container" class="flex">
		<div
			v-for="(item, i) in 3"
			:key="i"
			class="element-container"
		>
			<img
			 src="~/assets/images/rodillo.png"
			 class="img"
			 alt="imagen rodillo"
			/>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap'

onBeforeMount(() => {
	let elements = document.getElementsByClassName('element-container')
	const preloadAnimation = gsap.timeline()

	for(let i = 0; i < elements.length; i++) {
		preloadAnimation.to(elements[i],{
			duration: 0.3,
			height: 0,
		})
		preloadAnimation.to(elements[i],{ 
			duration: 0.2,
			top: 100,
			opacity: 0
		})
	}
})
</script>

<style scoped>
#preload-container {
	--at-apply: absolute h-screen w-full;
	--at-apply: top-0 left-0;
	--at-apply: overflow-hidden;
	--at-apply: z-5;
}
.img {
	--at-apply: absolute w-100px h-100px -bottom-180px;
	--at-apply: sm:w-200px sm:h-200px;
}
.element-container {
	--at-apply: relative flex justify-center flex-grow;
}

.element-container:nth-child(1) {
	--at-apply: bg-blue-500;
}
.element-container:nth-child(2) {
	--at-apply: bg-blue-200;
}
.element-container:nth-child(3) {
	--at-apply: bg-blue-600;
}
</style>
