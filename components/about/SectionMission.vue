<template>
	<section ref="sectionMission" class="container-section-mission">
		<div class="container-wrap text-white">

			<!-- <div v-for="(item,i) in dataSection" :key="i" class="container-cards" > -->
			<div class="container-cards-left gap-4" >

				<!-- mission -->
				<div class="card" >
					<nuxt-icon :name="dataSection['mission'].icon" class="card-icon"/>
					<fieldset>
						<legend>
							<h2>{{ dataSection['mission'].title  }}</h2>
						</legend>
						<p
							v-for="(paragraph, i) in dataSection['mission'].content"
							:key="i"
							class="text-lg"
						>
							{{ paragraph }}
						</p>
					</fieldset>
				</div>

				<!-- vision -->
				<div class="card" >
					<nuxt-icon :name="dataSection['vision'].icon" class="card-icon"/>
					<fieldset>
						<legend>
							<h2>{{ dataSection['vision'].title  }}</h2>
						</legend>
						<p
							v-for="(paragraph, i) in dataSection['vision'].content"
							:key="i"
							class="text-lg"
						>
							{{ paragraph }}
						</p>
					</fieldset>
				</div>

			</div>

			<!-- valores -->
			<div class="container-cards-right">
				<div class="card h-full">
					<nuxt-icon :name="dataSection['values'].icon" class="card-icon"/>
					<fieldset>
						<legend>
							<h2>{{ dataSection['values'].title  }}</h2>
						</legend>

						<p
							v-for="(paragraph, i) in dataSection['values'].content"
							:key="i"
							class="text-lg"
						>
							{{ paragraph }}
						</p>
					</fieldset>
				</div>

			</div>
		</div>
	</section>
</template>

<script setup>
import { gsap } from 'gsap'

const props = defineProps({
	dataSection: {
		type: Object,
		default: {
			purpose: {
				icon: 'eye-solid',
				title: 'title',
				content: [ 'paragraph' ] 
			}
		}
	},
	dataAnimation: {
		type: Object,
		default: { play: false, stop: false }
	}
})

let sectionMission = ref(null)
let animateSection = gsap.timeline()

let play = (htmlElements) => {
	animateSection.to(htmlElements.cards,{
		opacity: 1,
		stagger: .3
	})
}

let pause = () => {
	console.log('close mission')
}

onMounted(() => {
	let htmlElements = {
		cards : sectionMission.value.querySelectorAll('.card') 
	}

	animateSection.set( htmlElements.cards, { opacity: 0 } )

	watchEffect(() => {
		props.dataAnimation.play ? play(htmlElements)	: pause()
	})

	
})
</script>

<style scoped>
.container-section-mission {
	--at-apply: h-full;
	--at-apply: flex justify-center items-center;
}
.container-wrap {
	--at-apply: flex flex-col p-2 lg:flex-row gap-4 mx-auto container;
	--at-apply: text-white;
}

.container-cards-left {
	--at-apply: flex flex-col gap-4;
}
.container-cards-right {
	--at-apply: flex flex-col;
}

.card {
	--at-apply: bg-slate-900;
	--at-apply: flex flex-col px-2 sm:px-8 py-2 sm:py-8;
}

.card-mission {
	--at-apply: bg-gray-700 text-white;
}

.card-icon {
	--at-apply: mx-auto text-9xl text-red-500;
}

.box:nth-child(3) {
	/* --at-apply: w-full; */
	grid-column: 1 / span 2;
}

</style>
