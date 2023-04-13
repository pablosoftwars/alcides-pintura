<template>
	<section
		class="container-section-about"
	>
		<div class="grid sm:grid-cols-2 grid-cols-1 bg-black text-white">
			<div class="flex flex-col">
				<h1>{{ dataSection.leftSide.title }}</h1>
				<p>{{ dataSection.leftSide.description }} </p>

			</div>
			<div class="overflow-hidden">
				<nuxt-img
					:src="dataSection.rightSide.imgUrl1920"
					:alt="dataSection.rightSide.imgAlt"
				/>
			</div>
		</div>
	</section>

</template>

<script setup>
const prop = defineProps({
	dataSection: {
		type: Object,
		defautl: {
			leftSide: {
				title: 'Mision',
				description: 'lorem ipsum dolor sit am'
			},
			rightSide: {
				imgUrl1920: '/img/home/casa2-interior-1920w.webp',
				imgUrl460: '',
				imgAlt: 'imagen aqui'
			}
		}
	}
})
</script>

<style scoped>
.container-section-about {
	--at-apply: w-full h-full bg-green-500;
}

.section-right img {
	--at-apply: h-screen w-full;
	object-fit: cover;
	

}

</style>
