<template>
	<section ref="sectionWhyChoice" class="container-section-why-choice">
		<div class="container-wrap">

			<h2 class="title-why-choice">{{ dataSection.title }}</h2>

			<div class="container-cards">
				<div
					v-for="(item, i) in dataSection.content"
					:key="i"
					class="card"
				>
					<div class="card-icon">
						<nuxt-icon name="check-double-solid" class="card-icon-check" />
					</div>
					<div class="card-text">
						<h3 class="card-text-title">{{ item.subTitle }}</h3>
						<p class="card-text-paragraph">{{ item.paragraph }}</p>
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
			title: 'title',
			content: [
				{ subTitle: "subtitle", paragraph: "paragraph" }
			]
		}
	},
	dataAnimation: {
		type: Object,
		default: { play: false, stop: false }
	}
})
let animateSection = gsap.timeline()

let play = (htmlElements) => { 
	animateSection.to(htmlElements.title, {
		opacity: 1,
		scale: 1,
		duration: 0.3,
		filter: "blur(0rem)"
	})
	animateSection.to(htmlElements.cardTitle, {
		x: 0,
		opacity: 1,
		duration: 0.3
	})

	animateSection.to(htmlElements.cardParagraph, {
		y: 0,
		opacity: 1,
		duration: 0.3
	})

	animateSection.to(htmlElements.cardIconCheck, {
		opacity: 1,
		scale: 1,
		stagger: 0.3,
		ease: 'elastic.out'
	})

}
let pause = () => { console.log("pause whyChoice") }

let sectionWhyChoice = ref(null)

onMounted(() => {
	let htmlElements = {
		title: sectionWhyChoice.value.querySelector('.title-why-choice'),
		cardIconCheck: sectionWhyChoice.value.querySelectorAll('.card-icon'),
		cardTitle: sectionWhyChoice.value.querySelectorAll('.card-text-title'),
		cardParagraph: sectionWhyChoice.value.querySelectorAll('.card-text-paragraph')
	}

	//initialize animation
	animateSection.set(htmlElements.title, { opacity: 0, scale: 0, filter: "blur(1rem)" })
	animateSection.set(htmlElements.cardTitle, { x: 100, opacity: 0 })
	animateSection.set(htmlElements.cardParagraph,{ y: 100, opacity: 0 })
	animateSection.set(htmlElements.cardIconCheck, { scale: 0, opacity: 0 })

	watchEffect(() => {
		props.dataAnimation.play ? play(htmlElements):pause()
	})
})
</script>
<style scoped>
.container-section-why-choice {
	--at-apply: py-20 sm:py-30;
}

.container-wrap { 
	--at-apply: mx-auto container text-center;
	--at-apply: flex flex-col gap-10;
}

.title-why-choice {
	--at-apply: text-slate-900;
	--at-apply: opacity-0;
}

.container-cards {
	--at-apply: grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4;
}

.card {
	--at-apply: flex text-left;
}

.card-icon {
	--at-apply: p-2 text-xl text-red-500;
	--at-apply: opacity-0;
}

.card-text {
	--at-apply: px-2 text-lg;
	--at-apply: overflow-hidden;
}

.card-text-title {
	--at-apply: m-0 py-2 text-red-500;
	--at-apply: opacity-0;
}

.card-text-paragraph {

}
</style>

