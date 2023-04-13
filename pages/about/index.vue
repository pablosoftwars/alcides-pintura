<template>
	<div ref="containerAbout" class="container-about">
		<SectionPresentation
			id="id-presentation"
			:dataSection="dataPage.presentation.data"
			:dataAnimation="dataPage.presentation.animation"
			class="section-animation"
		/>
		<SectionMission
			id="id-principies"
			:dataSection="dataPage.principies.data"
			:dataAnimation="dataPage.principies.animation"
			class="section-animation"
		/>
	</div>
</template>

<script setup>
import SectionPresentation from '~/components/about/SectionPresentation.vue'
import SectionMission from '~/components/about/SectionMission.vue'
import dataAbout from '~/pages/about/data_about.json'

let dataPresentation = dataAbout.sectionPresentation
let dataPrincipies = dataAbout.sectionPrincipies

let dataPage = {
	presentation: {
		data:dataAbout.sectionPresentation,
		animation: shallowReactive({ play: false })
	},
	principies: {
		data:dataAbout.sectionPurpose,
		animation: shallowReactive({ play: false })
	}
}

let containerAbout = ref(null)
let observer = null

let animateIntersected = (entries, htmlElements) => {
	entries.forEach(entry => {
		let id = entry.target.attributes.id.value
		let idSanatize = id.replace("id-","")

		if(entry.isIntersecting) { dataPage[idSanatize].animation.play = true }
	})

}

onMounted(() => {
	let sectionElements = containerAbout.value.querySelectorAll('.section-animation')
	let options = { rootMargin: '0px', threshold: 0.2 }

	observer = new IntersectionObserver(entry => animateIntersected(entry, sectionElements), options)

	sectionElements.forEach(element=> { observer.observe(element) })

})

</script>

<style scoped>
.container-about {
	--at-apply: h-full w-full;
	--at-apply: relative flex flex-col;
	/* --at-apply: bg-black; */
}
</style>
