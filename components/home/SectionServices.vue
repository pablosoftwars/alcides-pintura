<template>
	<section ref="sectionServices" class="container-section-services">
		 <div class="container-wrap">
				<h2 class="title-services">{{ dataSection.title }}</h2>

				<div class="container-cards" >
					<div
						v-for="(content, x) in dataSection.content"
						:key="x"
						class="card bg-slate-100"
					>
						<div class="">
							<nuxt-icon :name="content.icon" class="text-red-500 text-8xl"/>
						</div>

						<h3 class="">{{ content.subTitle }}</h3>

						<p class="text-slate-900 text-lg">{{ content.paragraph }}</p>
						<div class="h-full flex items-end justify-center">
							<!-- <button class="bg-red-500 text-white px-4 py-2 border-0 text-lg text-bold">ver mas</button> -->
							<a class="bg-red-500 text-white px-4 py-2 border-0 text-lg text-bold" :href="content.href">
								Ver mas
							</a>
						</div>
					</div>
				</div>
		 </div>
	</section>
</template>

<script setup>
import { gsap } from 'gsap'

let props = defineProps({
	dataSection: {
		type: Object,
		default: {
			title: "title",
			content: [
				{ 
					icon: 'bar-solid',
					subTitle: "subtitle",
					paragraph: "paragraph",
					href: "#serviceExterior"
				}
			]
		}
	},
	dataAnimation: {
		type: Object,
		default: { play: false, stop: false }
	}
})

let sectionServices = ref(null)
let animateSection = gsap.timeline()

let play = (htmlElements) => {

	animateSection.to(htmlElements.title, {
		opacity: 1,
		scale: 1,
		filter: 'blur(0rem)',
		duration: 0.3
	})

	animateSection.to(htmlElements.cards, {
		x: 0,
		opacity: 1,
		scale: 1,
		stagger: 0.3
	})

}

let pause = () => { console.log('pause services') }

onMounted(() => {
	//inicializamos el elemento con opacidad o
	let htmlElements = {
		cards: sectionServices.value.querySelectorAll('.card'),
		title: sectionServices.value.querySelector('.title-services')
	}

	//initialize animation
	animateSection.set(htmlElements.cards, { x: -100, opacity: 0, scale: 0 })
	animateSection.set(htmlElements.title, { opacity: 0, scale: 0, filter: 'blur(1rem)' })

	watchEffect(() => { props.dataAnimation.play ? play(htmlElements):pause() })
})

</script>
<style scoped>
.container-section-services {
	--at-apply: py-20 sm:py-30 overflow-hidden;
}
.container-wrap {
	--at-apply: flex flex-col gap-10 text-center container mx-auto px-2;
}
.container-cards {
	--at-apply: flex flex-col md:flex-row gap-8 justify-between;
}
.card {
	--at-apply: flex-1 flex flex-col p-4;
}
</style>
