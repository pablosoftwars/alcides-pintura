<template>
	<div ref="containerGrid" class="container-grid">
		<div
			v-for="(item, i) in 30"
			:key="i"
			class="item-grid"
		>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap'
let containerGrid = ref(null)
let props = defineProps({
	activeAnim: { type: Boolean, default: false }
})

onMounted(() => {
	let itemsGrid = containerGrid.value.querySelectorAll('.item-grid')

	let initItemGrid = itemsGrid.forEach( itemGrid => {
		itemGrid.style.opacity = Math.round(Math.random() * 20) / 100
	})


	let animationGrid = gsap.timeline()
	animationGrid.to(itemsGrid, {
		opacity: () => Math.round(Math.random() * 20) / 100,
		duration: 2,
		repeat: -1,
		repeatRefresh: true,
		ease: "power2.inOut"
	})
})

</script>

<style scoped>
.container-grid{
	--at-apply: absolute;
	--at-apply: w-full h-full;
	--at-apply: grid grid-cols-6 grid-rows-5;
}

.item-grid{
	--at-apply: w-full h-full;
	--at-apply: bg-black;
}
</style>
