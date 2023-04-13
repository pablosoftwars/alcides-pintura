<template>
	<section class="container-section">
		<div class="container-service">
			
			<h2 class="text-slate-900">{{ dataSection.title }}</h2>
			<p class="text-lg">{{ dataSection.description }}</p>

			<h2>¿Comó lo trabajamos?</h2>
			<div class="text-left">

				<h3 class="text-slate-900">{{ dataSection.especifications.subTitle }}</h3>

				<ul
					v-for="(especification, i) in dataSection.especifications.paragraphs"
					:key="i"
					class="text-lg"
				>
					<li>{{ especification }}</li>
				</ul>

				<h3 class="text-slate-900">{{ dataSection.procedures.subTitle }}</h3>
				<ul
					v-for="(procedure, i) in dataSection.procedures.paragraphs"
					:key="i"
					class="text-lg"
				>
					<li>{{ procedure }}</li>
				</ul>


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

	</section>
</template>

<script setup>
let props = defineProps({
	dataSection: {
		type: Object,
		default: {
			title: 'title',
			description: 'description',
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
.container-section {
	--at-apply: my-20 sm:my-30;
}

.container-service {
	--at-apply: flex flex-col;
	--at-apply: container mx-auto;
	--at-apply: text-center;
}
</style>
