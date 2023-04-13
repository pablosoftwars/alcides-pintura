<template>
	<div ref="containerHome" class="container-home">

		<SectionPresentation
			id="id-presentation"
			:dataSection="dataPage.presentation.data"
			:dataAnimation="dataPage.presentation.animation"
			class="section-animation overflow-hidden"
		/>

		<SectionServices
			id="id-services"
			:dataSection="dataPage.services.data"
			:dataAnimation="dataPage.services.animation"
			class="section-animation"
		/>

		<SectionHiringSteps
			id="id-hiringSteps"
			:dataSection="dataPage.hiringSteps.data"
			:dataAnimation="dataPage.hiringSteps.animation"
			class="section-animation"
		/>

		<SectionWhyChoice
			id="id-whyChoice"
			:dataSection="dataPage.whyChoice.data"
			:dataAnimation="dataPage.whyChoice.animation"
			class="section-animation"
		/>

		<SectionComments
			id="id-comments"
			:dataSection="dataPage.comments.data"
			:dataAnimation="dataPage.comments.animation"
			class="section-animation"
		/>

		<SectionFoot />
	</div>
</template>

<script setup>
import { gsap } from 'gsap'

import SectionPresentation from '~/components/home/SectionPresentation.vue'
import SectionServices from '~/components/home/SectionServices.vue'
import SectionHiringSteps from '~/components/home/SectionHiringSteps.vue'
import SectionWhyChoice from '~/components/home/SectionWhyChoice.vue'
import SectionComments from '~/components/home/SectionComments.vue'
import SectionFoot from '~/components/home/SectionFoot.vue'

import BackgroundSquares from '~/components/shared/BackgroundSquares.vue'
import CurtainLines from '~/components/shared/CurtainLines.vue'

import dataHome from '~/pages/home/data_home.json'

let dataPage = {
	presentation: { data: dataHome.sectionPresentation, animation: shallowReactive({ play: false }) },
	services: { data: dataHome.sectionService, animation: shallowReactive({ play: false }) },
	hiringSteps: { data: dataHome.sectionHiringSteps, animation: shallowReactive({ play: false }) },
	whyChoice: { data: dataHome.sectionWhyChoice, animation: shallowReactive({ play: false }) },
	comments: { data: dataHome.sectionComments, animation: shallowReactive({ play: false }) }
}

//elementos para la animacion por seccion
let containerHome = ref(null) 
let observer = null

//funcion que activa la animacion cundo la section es intersectada
let sequenceAnimation = (entries, data) => {
  entries.forEach(entry => {
		let id = entry.target.attributes.id.value
		let idSanatize = id.replace("id-","")

		if( entry.isIntersecting ) { dataPage[idSanatize].animation.play = true }
		// dataPage[idSanatize].animation.play = entry.isIntersecting
  });
}


onMounted(() => {
	let sectionService = containerHome.value.querySelectorAll('.section-animation')

	//1.- definimos un IntersectionObserver
	let options = { rootMargin: '0px', threshold: 0.2 }
	observer = new IntersectionObserver(entries => sequenceAnimation(entries, sectionService) , options)

	//2.- Le decimos que observar al IntersectionObserves
	// let sectionService = containerHome.value.querySelectorAll('.wrap-section-service')
	sectionService.forEach((item) => {
		observer.observe(item)
	})

})

// onUnmounted(() => { observer.disconnect() })
</script>

<style scoped>
.container-home {
	--at-apply: relative h-full w-full flex flex-col;
}

.wrap-section-service {
	--at-apply: relative;
}

.container-bars {
	--at-apply: absolute w-full h-full flex flex-col;
	--at-apply: top-0 left-0;
	--at-apply: overflow-hidden;
	pointer-events: none;
}

.bar-item {
	--at-apply: border border-solid;
	--at-apply: w-full h-full;
	--at-apply: flex bg-white;
}

.square-item {
	--at-apply: h-20 w-20 bg-red-500;
}

.square-item:nth-child(2) {
	--at-apply: bg-black;
}
</style>
