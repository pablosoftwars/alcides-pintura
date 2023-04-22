<template>
	<section ref="sectionPresentation" class="container-section-presentation">

		<div class="card-presentation">

			<!-- top and right -->
			<div class="panel-top-right">

				<div class="container-title-company">
					<h2 class="title-company">
						Alcides & Asociados
						<div class="title-company-overlay"></div>
						<nuxt-img class="bg-title-company bg-title -z-1" src="/img/about/rastro-pintura-rodillo-rojo.png"></nuxt-img>
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
				<h2 class="title-presentation">{{ dataSection.title }}</h2>
				<h3 class="subtitle-presentation">{{ dataSection.subTitle }}</h3>
				<hr class="divisor-presentation">
				<p
					v-for="(paragraph, i) in dataSection.content"
					:key="i"
					class="paragraph-presentation"
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
let animateSection = gsap.timeline( {duration: .3} )

let play = (htmlElements) => {
	animateSection.to(htmlElements.titleCompany, {
		width: 0, duration: .5
	})
	animateSection.to(htmlElements.titlePresentation, {
		x:0,
		opacity: 1,
		filter: 'blur(0rem)'
	})
	animateSection.to(htmlElements.subTitlePresentation, {
		x: 0,
		opacity: 1,
		filter: 'blur(0rem)'
	})
	animateSection.to(htmlElements.divisorPresentation, { width: '100%' })
	animateSection.to(htmlElements.paragraphPresentation, {
		y: 0,
		opacity: 1,
		filter: 'blur(0rem)'
	})

}

let stop = () => {
	console.log('stop')
}

onMounted(() => {
	let htmlElements = {
		titleCompany: sectionPresentation.value.querySelector('.title-company-overlay'),
		titlePresentation: sectionPresentation.value.querySelector('.title-presentation'),
		subTitlePresentation: sectionPresentation.value.querySelector('.subtitle-presentation'),
		paragraphPresentation:  sectionPresentation.value.querySelectorAll('.paragraph-presentation'),
		divisorPresentation: sectionPresentation.value.querySelector('.divisor-presentation')
	}


	animateSection.set(htmlElements.titlePresentation, { x: 200, opacity: 0, filter: 'blur(1rem)' })
	animateSection.set(htmlElements.subTitlePresentation, { x: -200, opacity: 0, filter: 'blur(1rem)'})
	animateSection.set(htmlElements.paragraphPresentation, { y: 200, opacity: 0, filter: 'blur(1rem)'})
	animateSection.set(htmlElements.divisorPresentation, { width: 0 })

	watchEffect(() => {
		props.dataAnimation.play ? play(htmlElements):stop()
	})
})
</script>


<style scoped>
.container-section-presentation {
	--at-apply: flex flex-col justify-center items-center;
	--at-apply: w-full overflow-hidden;
	--at-apply: py-20 sm:py-30;
	/* min-height: calc(100vh - 60px); */
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

.panel-top-right {
	--at-apply: relative;
	--at-apply: flex flex-grow justify-center items-center;
	--at-apply: h-full w-full;
	--at-apply: p-2;
}

.panel-bottom-left {
	--at-apply: mx-auto container h-full w-full text-slate-900;
	--at-apply: p-2;
}

.container-title-company {
	--at-apply: absolute -z-1 left-0 top-0;
}

.title-company {
	--at-apply: relative p-14 m-0 text-6xl text-white;
}

.title-company-overlay {
	--at-apply: absolute top-0 right-0;
	--at-apply: bg-white;
	--at-apply: h-full w-full;
}

.container-title-presentation {
	--at-apply: absolute top-0 left-0 w-full h-full;
}

.subtitle-presentation {
	--at-apply: text-2xl text-slate-900;
}
.bg-title-presentation {
	--at-apply: absolute top-0 left-0 w-full h-full;
	--at-apply: bg-red-500;
}
.title-presentation {
	--at-apply: relative;
	--at-apply: text-6xl text-red-500 text-center;
	--at-apply: w-70% py-8 px-2 font-bold mt-10;
}
.paragraph-presentation {
	--at-apply: text-lg text-slate-900;
}
.bg-title {
	--at-apply: absolute -z-1 w-full h-full top-0 left-0;
}
</style>
