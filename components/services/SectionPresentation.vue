<template>
	<section class="container-section-presentation">
		<div class="container-cards">
			
			<h2>{{ dataSection.title }}</h2>
			<div>
				<div
					v-for="(paragraph, i) in dataSection.content"
					:key="i"
				>
					<p class="text-lg">{{ paragraph }}</p>
				</div>
			</div>

		</div>
	</section>
</template>

<script setup>
let props = defineProps({
	dataSection: {
		type: Object,
		default: {
			title: "titulo",
			content: [
				"parrafo"
			]
		}
	},
	dataAnimation: {
		type: Object,
		default: {
			play: false,
			pause: false
		}
	}
})

let play = () => { console.log("play presentation") }
let pause = () => { console.log("pause presentation") }

onMounted(() => {
	watchEffect(() => {
		props.dataAnimation.play ? play():pause()
	})
})
</script>

<style scoped>
.container-section-presentation {
	--at-apply: py-20 sm:py-30;
	background-image: url("/img/service/colores.webp");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.container-cards {
	backdrop-filter: blur(10px);
	--at-apply: mx-auto container text-center;
	--at-apply: bg-slate-900/90;
	--at-apply: py-6 px-4;
	--at-apply: text-white text-center;
	--at-apply: border border-t-solid border-t-10 border-red-500;
}


</style>
