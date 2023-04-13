<template>
	<section ref="sectionPresentation" class="container-section-presentation">

		<div class="card-presentation">

			<!-- top and right -->
			<div class="panel-top-right">

				<div class="absolute -z-1 left-0 top-0">
					<h2 class="relative p-14 m-0 text-6xl text-white">
						Alcide & Asociados
						<nuxt-img class="absolute -z-1 w-full h-full top-0 left-0" src="/img/about/rastro-pintura-rodillo-rojo.png">
						</nuxt-img>
					</h2>
				</div>

				<nuxt-img
					:src="dataSection.img.urlXl"
					:srcset="`${dataSection.img.urlXl} 1920w, ${dataSection.img.urlSm} 640w`"
					:alt="dataSection.img.attrAlt"
					class="card-img"
				/>
			</div>

			<!-- bottom and left -->
			<div class="panel-bottom-left">
				<h2 class="text-4xl">{{ dataSection.title }}</h2>
				<h3 class="text-2xl">{{ dataSection.subTitle }}</h3>
				<p
					v-for="(paragraph, i) in dataSection.content"
					:key="i"
					class="text-lg"
				>
					{{ paragraph }}
				</p>
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
				subTitle: 'subTitle',
				content: ['content'],
				img: {
					urlSm: '/img/about/pintor-rodillo-640w.webp',
					urlXl: '/img/about/pintor-rodillo-1131w.webp',
					attrAlt: 'image pintor rodillo rojo'
				}
		},
	},
	dataAnimation: {
		type: Object,
		default: { play: false, stop: false }
	}
})

let sectionPresentation = ref(null)
let animateSection = gsap.timeline()

let play = (htmlElements) => {
	animateSection.to(htmlElements.bgTitle,
	{ width: '100%', duration: 0.5 })
}

let stop = () => {
	console.log('stop')
}

onMounted(() => {
	let htmlElements = {
		bgTitle: sectionPresentation.value.querySelector('.bg-title-presentation')
	}

	// console.log(htmlElements.title)

	animateSection.set(htmlElements.bgTitle,{ width: 0 })

	watchEffect(() => {
		props.dataAnimation.play ? play(htmlElements):stop()
	})
})
</script>


<style scoped>
.container-section-presentation {
	--at-apply: flex flex-col justify-center items-center;
	--at-apply: w-full;
	min-height: calc(100vh - 60px);
}

.card-presentation {
	--at-apply: flex flex-col lg:flex-row;
	--at-apply: w-full;
	--at-apply: mx-auto container;
}

.card-img {
	--at-apply: m-2 w-300px overflow-hidden;
	--at-apply: sm:w-500px z-1;
	object-fit: cover;
	object-position: top;
}

.card-presentation .panel-top-right {
	--at-apply: relative;
	--at-apply: flex justify-center items-center;
	--at-apply: h-full w-full;
	--at-apply: p-2;
}

.card-presentation .panel-bottom-left {
	--at-apply: mx-auto container h-full w-full text-slate-900;
	--at-apply: p-2;
}

.container-title-presentation {
	--at-apply: absolute top-0 left-0 w-full h-full;
}
.bg-title-presentation {
	--at-apply: absolute top-0 left-0 w-full h-full;
	--at-apply: bg-red-500;
}
.title-presentation {
	--at-apply: relative;
	--at-apply: text-6xl text-white text-center;
	--at-apply: w-70% py-8 px-2 font-bold mt-10;
}
</style>
