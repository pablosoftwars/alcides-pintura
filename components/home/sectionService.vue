<template>
	<section ref="containerService" class="container-section-service overflow-hidden" >
		<nuxt-img
			:src="dataSection.img.urlXl"
			:srcset="`${dataSection.img.urlXl} 1920w, ${dataSection.img.urlSm} 640w`"
			:alt="dataSection.img.attrAlt"
			class="background-section-service"
			loading="lazy"
		/>

		<div class="container-card-service">
			<BackgroundSquares />
			<!-- title -->
			<div class="card-service-title">
				<h1 class="m-0" ref="title">{{ dataSection.title }}</h1>
			</div>

			<!-- description -->
			<div class="card-service-description ">

				<div class="card-service-description-text">
					<!-- adornos -->
					<div class="container-decoration">
						<div
							v-for="(item,i) in 6"
							:key="i"
							class="decorations"
						>
						</div>
					</div>
					<p 
						v-for="(paragraph, i) in dataSection.summary"
						:key="i"
						class="m-0 px-4 py-8"
					>
						{{ paragraph }}
					</p>

					<div class="card-actions flex justify-end">
						<NuxtLink
							:to="dataSection.btnActions.href"
							class="cursor-pointer p-4 bg-red-500 text-white no-underline"
						>
							{{ dataSection.btnActions.text }}
					</NuxtLink>
					</div>
				</div>
			</div>

		</div>
	</section>

</template>

<script setup>
import BackgroundSquares from '~/components/shared/BackgroundSquares.vue'

import { gsap } from 'gsap'

let props = defineProps({
	dataSection: {
		type: Object,
		default: {
			img: {
				urlSm: '/img/home/casa-exterior-640w',
				urlXl: '/img/home/casa-exterior-1920w',
				attrAlt: 'template alt image'
			},
			title: 'title',
			summary: 'description',
			btnActions: { text: 'Mas informacion', href: '#' }
		}
	}
})

let containerService = ref(null)
let title = ref(null)

onMounted(() => {
	let decorations = containerService.value.querySelectorAll('.decorations')
	let containerDecorations = containerService.value.querySelector('.container-decoration')
	let bgImage = containerService.value.querySelector('.background-section-service')

	let animAdornos = gsap.timeline()
	let animZoomImage = gsap.timeline()
	//paso 1 entrada
	animZoomImage.to(bgImage, {
		scale: 1.3,
		duration: 20,
		repeat: -1,
		yoyo: true,
		ease: 'none'
	})
	animAdornos.to(decorations, {
		opacity: 1,
		stagger: 0.3
	})

	animAdornos.to(containerDecorations, {
		x: 100,
		yoyo: true,
		repeat: -1,
		duration: 20,
		ease: 'none'
	})
})
</script>

<style scoped>
.container-section-service { --at-apply: relative h-screen overflow-hidden; }

.background-section-service {
	--at-apply: h-screen w-full; 
	object-fit: cover;
}

.container-card-service {
	--at-apply: w-full h-full flex flex-col overflow-hidden absolute top-0 left-0;
}

.card-service-title {
	--at-apply: top-0 left-0 bg-black/80 text-white py-4 px-2;
	--at-apply: border-b-20 border-b-solid border-red-500;
	--at-apply: text-2xl sm:text-5xl;
	backdrop-filter: blur(10px);
}

.card-service-description {
	--at-apply: relative text-white h-full text-xl flex justify-center items-center px-2;
	--at-apply: container mx-auto;
}
.card-service-description-text {
	--at-apply: bg-black/80;
	--at-apply: border-l-10 border-l-solid border-red-500;
	backdrop-filter: blur(10px);
	/* border-left: 0.5rem solid red; */
}
.container-decoration { --at-apply: absolute flex gap-2 -top-1 left-10; }

.decorations { --at-apply: w-4 h-4 bg-red-500 opacity-0; }

.decorations:nth-child(1) { --at-apply: bg-gray-200; }
.decorations:nth-child(2) { --at-apply: bg-gray-400; }
.decorations:nth-child(3) { --at-apply: bg-gray-300; }
.decorations:nth-child(4) { --at-apply: bg-black; }
.decorations:nth-child(5) { --at-apply: bg-red-400; }
</style>
