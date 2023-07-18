<template>
	<section :id="dataSection.id" class="container-section-service">
		<div class="card-service">
			
			<div class="flex justify-center items-center" >
				<nuxt-icon :name="dataSection.icon" class="text-red-500 mr-2 text-2xl" />
				<h2 class="text-slate-900">{{ dataSection.title }}</h2>
			</div>

			<p class="text-lg">{{ dataSection.description }}</p>

			<div class="flex flex-col gap-4">
				<div class="sm:px-6rem md:px-8rem">
					<SlideImg :dataImg='dataSection.img'/>
				</div>
				<!-- texto -->
				<div class="flex flex-col">
					<h2 class="text-slate-900">¿Comó lo trabajamos?</h2>

					<div class="text-left flex flex-col md:flex-row">
						<div class="p-2 bg-gray-100">
							<div class="flex justify-center items-center">
								<nuxt-icon name="list-check-solid" class="mr-2" />
								<h3 class="text-slate-900">{{ dataSection.especifications.subTitle }}</h3>
							</div>

							<ul
								v-for="(especification, i) in dataSection.especifications.paragraphs"
								:key="i"
								class="text-lg"
							>
								<li>{{ especification }}</li>
							</ul>
						</div>

						<div class="p-2 bg-gray-100">
							<div class="flex justify-center items-center">
								<nuxt-icon name="screwdriver-wrench-solid" class="mr-2" />
								<h3 class="text-slate-900">{{ dataSection.procedures.subTitle }}</h3>
							</div>
							<ul
								v-for="(procedure, i) in dataSection.procedures.paragraphs"
								:key="i"
								class="text-lg"
							>
								<li>{{ procedure }}</li>
							</ul>
						</div>

						<div class="p-2 bg-gray-100">
							<div class="flex justify-center items-center">
								<nuxt-icon name="triangle-exclamation-solid" class="mr-2 text-red-500" />
								<h3 class="text-slate-900">{{ dataSection.cares.subTitle }}</h3>
							</div>
							<ul
								v-for="(care, i) in dataSection.cares.paragraphs"
								:key="i"
								class="text-lg"
							>
								<li>{{ care }}</li>
							</ul>
						</div>

					</div>


				</div>

			</div>



		</div>

	</section>
</template>

<script setup>
import SlideImg from '~/components/shared/SlideImg.vue'

let props = defineProps({
	dataSection: {
		type: Object,
		default: {
			href: '',
			icon: 'bars-solid',
			title: 'title',
			description: 'description',
			img: [
				{
					id: 2,
					urlImg2560: '/img/service/fachada2-2560w.webp',
					urlImg1920: '/img/service/fachada2-1920w.webp',
					urlImg1280: '/img/service/fachada2-1280w.webp', 
					urlImg400: '/img/service/fachada2-400w.webp', 
					alt: 'alt imagen 2',
					caption: 'imagen numero 2'
				},
			],
			especifications: { 
				subTitle: 'subtitles',
				paragraphs: [ 'paragraphs' ]
			},
			procedures: {
				subTitle: 'subtitles',
				paragraphs: [ 'paragraphs' ]
			},
			cares: {
				subTitle: 'subtitles',
				paragraphs: [ 'paragraphs' ]
			}
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
</script>

<style scoped>
.container-section-service {
	--at-apply: py-20 sm:py-30;
}

.card-service {
	--at-apply: flex flex-col;
	--at-apply: container mx-auto;
	--at-apply: text-center overflow-hidden;
	/* --at-apply: p-2; */
}
.card-img-container {
	--at-apply: relative h-600px flex justify-center items-center;
}
.card-img-item:nth-child(1) {
	translate: 10px 10px;
	filter: hue-rotate(120deg);
}
.card-img-item:nth-child(2) {
	translate: 20px 20px;
	filter: hue-rotate(130deg);
}
/* .card-img-item:nth-child(3) { */
/* } */
</style>
