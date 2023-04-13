<template>
	<section class="py-20 sm:py-30">
		<div class="container-cards">
			
			<h2>{{ dataSection.title }}</h2>
			<div>
				<div>

				</div>
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
.container-cards {
	--at-apply: mx-auto container text-center;
}


</style>
