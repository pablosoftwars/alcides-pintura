<template>
	<section class="container-section-service">
		<div class="card-service">
			
			<h2 class="text-slate-900">{{ dataSection.title }}</h2>
			<p class="text-lg">{{ dataSection.description }}</p>
			<div class="flex flex-col gap-4">
				<!-- imagenslides -->
				<SlideShow />
				<!-- texto -->
				<div class="flex flex-col">
					<h2 class="text-slate-900">¿Comó lo trabajamos?</h2>

					<div class="text-left flex flex-col md:flex-row">
						<div class="p-2 bg-gray-100">
							<h3 class="text-slate-900">{{ dataSection.especifications.subTitle }}</h3>

							<ul
								v-for="(especification, i) in dataSection.especifications.paragraphs"
								:key="i"
								class="text-lg"
							>
								<li>{{ especification }}</li>
							</ul>
						</div>

						<div class="p-2 bg-gray-100">
							<h3 class="text-slate-900">{{ dataSection.procedures.subTitle }}</h3>
							<ul
								v-for="(procedure, i) in dataSection.procedures.paragraphs"
								:key="i"
								class="text-lg"
							>
								<li>{{ procedure }}</li>
							</ul>
						</div>

						<div class="p-2 bg-gray-100">
							<h3 class="text-slate-900">{{ dataSection.cares.subTitle }}</h3>
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
import SlideShow from '~/components/shared/SlideShow.vue'

let props = defineProps({
	dataSection: {
		type: Object,
		default: {
			title: 'title',
			description: 'description',
			images: ["/img/service/casa3-interior-1920w.webp"],
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
	--at-apply: my-20 sm:my-30;
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
