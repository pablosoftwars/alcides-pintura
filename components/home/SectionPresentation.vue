<template>
	<section class="container-section-first" >
		<!-- <nuxt-picture -->
		<!-- 	:src="dataSection.img.urlXl" -->
		<!-- 	class="absolute w-full" -->
		<!-- 	loading="lazy" -->
		<!-- 	fit="cover" -->
		<!-- 	sizes="sm:400px md:1280px lg:1920 xl:2560px" -->
		<!-- 	:imgAttrs="{ class:'w-full h-screen object-cover' }" -->
		<!-- /> -->
		<img
			:src="dataSection.img.urlXl"
			:srcset="`${dataSection.img.urlXl} 1920w,
								${dataSection.img.urlSm} 640w`"
			class="absolute w-full object-cover min-h-full"
		>
		<div class="card-advertisement">
			<!-- title secondary -->
			<Transition name="slide-top" mode="out-in">
				<h2 v-if="advertSecondary" :key="advertSecondary" class="advert-secondary" >
					{{ advertSecondary }}
				</h2>
			</Transition>

			<!-- title primary -->
			<Transition name="slide-right" mode="out-in">
				<h1 v-if="advertPrimary" :key="advertPrimary" class="advert-primary">
					{{ advertPrimary }}
				</h1>
			</Transition>

			<!-- botones -->
			<div class="card-actions">
				<NuxtLink
					v-for="(item, i) in dataSection.btnActions"
					:key="i"
					:to="item.href"
					class="button-action"
				>
				 {{ item.text }}
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup>
import { gsap } from 'gsap'

const prop = defineProps({
	dataSection: {
		type: Object,
		default: {
			img: {
				'url-sm': '/img/home/bg-mural-red-640w.webp',
				'url-xl': '/img/home/bg-mural-red-1920w.webp',
				'attr-alt': 'template-alt'
			},
			titles: [
				'title1',
				'title2'
			],
			subTitles: [
				'subTitle1',
				'subTitle2',
			],
			btnActions: [
				{ text:'Mas Informacion', href: '#'},
			] 
		}
	},
	dataAnimation: {
		type: Object,
		default: {
			play: false, //true = play , false = pause
			stop: false
		}
	}
})

// function rotate advertisements
let currentIndexPrimary = ref(0)
let currentIndexSecondary = ref(0)

let advertPrimary = ref('')
let advertSecondary = ref('')

let firstTime = true 

let changeText = (currentIndex, currentText, listTexts) => {
		currentText.value = listTexts[currentIndex.value]
		currentIndex.value = (currentIndex.value + 1) % listTexts.length
}


//boot default
if(firstTime) {
	changeText(
		currentIndexPrimary,
		advertPrimary,
		prop.dataSection.titles,
	)

	changeText(
		currentIndexSecondary,
		advertSecondary,
		prop.dataSection.subTitles,
	)

	firstTime = false
}

//execute interval rotate advertisements
setInterval(() => {
	changeText(
		currentIndexPrimary,
		advertPrimary,
		prop.dataSection.titles,
	)
}, 10000)

setInterval(() => {
	changeText(
		currentIndexSecondary,
		advertSecondary,
		prop.dataSection.subTitles,
	)
}, 6000)

let play = () => { console.log("play presentation") }
let pause = () => { console.log("pause presentation") }

watchEffect(() => {
	prop.dataAnimation.play ? play():pause()
})

</script>

<style scoped>
.container-section-first {
	--at-apply: relative w-full;
	--at-apply: flex flex-col justify-center items-center;
	min-height: calc(100vh - 60px);
}

.card-advertisement {
	backdrop-filter: blur(10px);
	--at-apply: bg-slate-900/90 card;
	--at-apply: w-full py-6;
	--at-apply: flex flex-col;
	--at-apply: border-t-solid border-t-10 border-red-500;
	--at-apply: text-center text-white;
}

.advert-primary, .advert-secondary {
	--at-apply: m-0;
	--at-apply: min-h-3em;
}

.advert-primary {
	--at-apply: text-4xl sm:text-6xl;
}

.advert-secondary {
	--at-apply: text-2xl sm:text-4xl;
}

.card-actions {
	--at-apply: flex flex-wrap gap-2 justify-center items-center;
}

.button-action {
	--at-apply: bg-red-500 p-4;
	--at-apply: text-white text-xl font-bold no-underline;
	--at-apply: cursor-pointer outline-0 border-0;
}

.button-action:nth-child(2) {
	--at-apply: bg-transparent border border-solid border-white text-white;
}
</style>
