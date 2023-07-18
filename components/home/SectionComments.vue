<template>
	<section ref="sectionComments" class="container-section-comments">
		<div class="container-wrap">

			<!-- title -->
			<h2 class="title-comments">{{ dataSection.title }}</h2>

			<!--container cards -->
			<div class="container-cards">
				<div
					v-for="(item,i) in dataSection.comments"
					:key="i"
					class="card"
				>
					<nuxt-icon name="quote-left-solid"/>
					<div class="text-center">{{ item.content }}</div>
					<hr>
					<cite class="bg-slate-900 text-white p-2">{{ item.author }} </cite>
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
			title: "cliente",
			comments: [
				{ id: 1, author: "author", content: "content" }
			]
		}
	},
	dataAnimation: {
		type: Object,
		default: { play: false, stop: false }
	}
})

let sectionComments = ref(null)
let animateSection = gsap.timeline()

let play = (htmlElements) => { 
	animateSection.to(htmlElements.title, {
		opacity: 1,
		scale: 1,
		filter: 'blur(0rem)',
		duration: 0.3
	})

	animateSection.to(htmlElements.cards, {
		y: 0,
		opacity: 1,
		stagger: 0.3
	})

}
let pause = () => { console.log("pause comments") }

onMounted(() => {
	let htmlElements = {
		title: sectionComments.value.querySelector('.title-comments'),
		cards: sectionComments.value.querySelectorAll('.card')
	}

	//initialize
	animateSection.set(htmlElements.title, { opacity: 0, scale: 0, filter: 'blur(1rem)' })
	animateSection.set(htmlElements.cards, { y: 100, opacity: 0 })

	watchEffect(() => {
		props.dataAnimation.play ? play(htmlElements):pause()
	})
})

</script>

<style scoped>
.container-section-comments {
	--at-apply: py-20 sm:py-30;
}
.container-wrap{ --at-apply: mx-auto container text-center flex flex-col gap-10; }
.title-comments {
	--at-apply: text-slate-900;
	--at-apply: opacity-0;
}
.container-cards { 
	--at-apply: flex w-full gap-4 p-4;
	overflow-x: auto;
	overflow-y: hidden;
}
.card {
	--at-apply: min-w-300px;
	--at-apply: text-lg text-left;
	--at-apply: opacity-0;
}
</style>
