<template>
	<div class="container-service">
		<SectionPresentation :dataSection="dataPresentation" />
		<SectionServices
			v-for="(item, i) in dataService"
			:key="i"
			:dataSection="item"
		/>
	</div>
</template>

<script setup>
import SectionPresentation from '~/components/services/SectionPresentation.vue'
import SectionServices from '~/components/services/SectionService.vue'

import dataServices from '~/pages/service/data_service.json'
// const { data: dataServices } = await useFetch('/api/service/service')

// let dataPresentation = dataServices.value.sectionPresentation
// let dataService = dataServices.value.sectionServices
let dataPresentation = dataServices.sectionPresentation
let dataService = dataServices.sectionServices

// onMounted(() => {
// })
</script>

<style scoped>

.container-service {
	--at-apply: relative h-full w-full flex flex-col;
	/* --at-apply: bg-green-400; */
}

.section-service {
	--at-apply: w-full h-screen;
}
/*  */
/* section { */
/* 	scroll-snap-align: start; */
/* } */

</style>
