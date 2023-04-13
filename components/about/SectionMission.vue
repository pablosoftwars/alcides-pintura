<template>
	<section ref="sectionMission" class="container-section-mission">
		<div class="container-wrap text-white">

			<!-- <div v-for="(item,i) in dataSection" :key="i" class="container-cards" > -->
			<div class="container-cards" >

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
			<div class="card">
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
	</section>
</template>

<script setup>
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
		// default: [ { icon: "bullseye-solid", title: "title", content: [ "paragraph" ] } ]
	},
	dataAnimation: {
		type: Object,
		default: { play: false, stop: false }
	}
})
let dataMissions = [
	{
		icon: 'bullseye-solid',
		title: 'Misión',
		description: ['nuestra misión es brindar servicios de pintado de alta calidad y durabilidad para mejorar la estética y protección de las casas y edificios, logrando la satisfacción total de nuestros clientes a través de un servicio personalizado, confiable y eficiente.']
	},
	{
		icon: 'eye-solid',
		title: 'Visión', 
		description: ['Ser reconocidos como la empresa líder en el mercado de pintura de casas, ofreciendo servicios de alta calidad a precios competitivos, innovando constantemente en técnicas y materiales, y expandiendo nuestra presencia en todo el territorio nacional.']
	},
	{
		icon: 'gem-regular',
		title: 'valores',
		description: [
			'Calidad: Nos comprometemos a ofrecer a nuestros clientes la mejor calidad en materiales, técnicas y mano de obra, asegurando que el trabajo realizado sea duradero y satisfactorio.',
			'Responsabilidad: Nos enfocamos en cumplir con los compromisos adquiridos con nuestros clientes, trabajando con profesionalismo, puntualidad y honestidad en cada proyecto.',
			'Trabajo en equipo: Fomentamos la colaboración y el trabajo en equipo para alcanzar los objetivos de la empresa y brindar un servicio óptimo a nuestros clientes.',
			'Innovación: Nos mantenemos actualizados en técnicas y materiales de pintura para ofrecer servicios innovadores y de alta calidad.',
			'Compromiso social: Somos una empresa comprometida con el medio ambiente y la comunidad, por lo que utilizamos materiales de pintura ecológicos y apoyamos iniciativas sociales en nuestras comunidades locales.'
		]
	},
]
</script>

<style scoped>
.container-section-mission {
	--at-apply: h-full;
	--at-apply: flex justify-center items-center;
}
.container-wrap {
	--at-apply: flex flex-col sm:flex-row gap-4 mx-auto container;
	--at-apply: p-2;
	--at-apply: text-white;
}

.container-cards {
	--at-apply: flex flex-col gap-4;
}

.card {
	--at-apply: bg-slate-900 h-full;
	--at-apply: flex flex-col px-2 sm:px-8 py-4 sm:py-8;
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
