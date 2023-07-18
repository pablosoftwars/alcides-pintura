<template>
	<section ref="sectionHiringSteps" class="container-section-hiring-steps">
		<div class="container-wrap">

			<h2 class="title-hiring-steps">{{ dataSection.title }} </h2>

			<div class="container-card" >
				<div
					v-for="(paragraph,i) in dataSection.content"
					:key="i"
					class="card"
				>

					<!-- background cards -->
					<!-- <div class="background-card"> -->
					<!-- 	<div class="bg-red-500 flex-1"></div> -->
					<!-- 	<div class="bg-slate-900 flex-1"></div> -->
					<!-- </div> -->

					<!-- background overlay -->
					<!-- <div class="background-overlay-card"></div> -->

					<p class="text-8xl text-bold text-white bg-red-500 m-auto">0{{i + 1}}</p>
					<p class="text-lg">{{ paragraph }}</p>

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
		default: { title: "titulo", content: [ "paragraphs" ] }
	},
	dataAnimation: {
		type: Object,
		default: {
			play: false, //true = play , false = pause
			stop: false
		}
	}
})

let sectionHiringSteps = ref(null)
let animationCards = gsap.timeline()


let play = (htmlElements) => { 
	animationCards.to(htmlElements.title, { opacity: 1, scale: 1, filter: 'blur(0rem)', duration: 0.3 })
	animationCards.to(htmlElements.cards, { x: 0, scale: 1, opacity: 1, stagger: 0.3 });
}

let pause = () => { console.log("pause hiringSteps") }

onMounted(() => {

	let htmlElements = {
		title: sectionHiringSteps.value.querySelector('.title-hiring-steps'),
		cards: sectionHiringSteps.value.querySelectorAll('.card'),
	}

	animationCards.set(htmlElements.title, { opacity: 0, scale: 0, filter: 'blur(1rem)' })
	animationCards.set(htmlElements.cards, { scale: 0, opacity: 0 })

	watchEffect(() => {
		props.dataAnimation.play ? play(htmlElements):pause()
	})
})
</script>

<style scoped>
.container-section-hiring-steps {
	--at-apply: text-center py-20 sm:py-30;
}

.container-wrap {
	--at-apply: mx-auto container text-center;
	--at-apply: flex flex-col gap-10 px-2;
}

.title-hiring-steps {
	--at-apply: text-slate-900;
	--at-apply: opacity-0;
}

.container-cards {
	--at-apply: flex flex-col sm:flex-row flex-wrap w-full gap-8;
}
.container-card {
	--at-apply: flex flex-col sm:flex-row gap-8;
}

.card {
	--at-apply: relative bg-slate-100 p-2 flex-1;
	--at-apply: opacity-0;
}

.background-card {
	--at-apply: -z-2 flex flex-row absolute top-0 left-0 w-full h-full;
}
.background-overlay-card {
	--at-apply: -z-1 absolute top-0 left-0;
	--at-apply: h-full w-full;
	--at-apply: bg-gradient-to-t from-black/50 via-transparent to-black/50; 
}
</style>
