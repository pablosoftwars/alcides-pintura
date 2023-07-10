<template>
	<div ref="slideImg" class="container-slide-img">

			<!-- <div> {{ caption }} </div> -->
			<div
				v-for="(item, i) in dataImg" :key="i" 
				class="mySlides relative"
			>
				<div class="bg-slate-900 text-white p-2">{{ item.caption }}</div>
				<nuxt-img
					:src="item.urlImg1920"
					:srcset="`${item.urlImg2560} 2560w,
										${item.urlImg1920} 1920w,
										${item.urlImg1280} 1280w,
										${item.urlImg400} 400w`"
					:alt="item.alt"
					class="img"
				/>

			</div>

			<!-- dots -->
			<div class="flex justify-center items-center gap-2 absolute bottom-2 w-full py-2" >
				<button
					v-for="(element, e) in dataImg"
					:key="e"
					class="dot"
					@click="currentSlide(element.id)"
				>
				</button>
			</div>

			<!-- Arrows -->
			<button class="prev" @click="plusSlides(-1)">&#10094;</button>
			<button class="next" @click="plusSlides(1)">&#10095;</button>

	</div>
</template>

<script setup>
const props = defineProps({
	dataImg: {
		type: Array,
		default: [
			{
				id: 1,
				urlImg2560: '/img/service/fachada1-2560w.webp',
				urlImg1920: '/img/service/fachada1-1920w.webp',
				urlImg1280: '/img/service/fachada1-1280w.webp', 
				urlImg400: '/img/service/fachada1-400w.webp', 
				alt: 'alt imagen 1',
				caption: 'imagen numero 1'
			},
		]
	}
})

let caption = ref('')

onMounted(() => {
})

let showSlides = null
let slideImg = ref(null)
let slideIndex = 1

let plusSlides = (n) => {
	showSlides(slideIndex += n)
}

let currentSlide = (n) => {
	showSlides(slideIndex = n)
}

onMounted(() => {

	showSlides = (n) => {
		let i;
		let slides = slideImg.value.getElementsByClassName('mySlides')
		let dots = slideImg.value.getElementsByClassName('dot')

		if(n > slides.length) slideIndex = 1
		if(n < 1) slideIndex = slides.length

		for( i = 0; i < slides.length; i++ ) {
			slides[i].style.display = "none";
		}

		for(i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	}

	showSlides(slideIndex);
})

</script>

<style scoped>
.container-slide-img {
	--at-apply: overflow-hidden bg-gray-200;
	--at-apply: relative flex flex-col justify-center;
}

.frame-slide {
	--at-apply: flex flex-col items-center justify-center;
	/* --at-apply: border border-solid border-blue-500; */
	--at-apply: mx-auto;
}

.mySlides {
	--at-apply: flex flex-col items-center justify-center;
	/* --at-apply: border border-solid border-blue-500; */
	--at-apply: mx-auto;
	/* aspect-ratio: 16/9; */
	/* width: 100%; */
	/* object-fit: cover; */
}

.img{
	aspect-ratio: 16/9;
	width: 100%;
	object-fit: cover;
}

.mySlides:before {
	content: " ";
	-at-apply: h-full w-full;
}

.dot {
	cursor: pointer;
	min-height: 1rem;
	min-width: 1rem;
	--at-apply: bg-white;
	--at-apply: hover:bg-red-500;
}

/* .dot:nth-child(1) { --at-apply: bg-red-500;} */

.prev { --at-apply: left-0 ml-2; }

.next { --at-apply: right-0 mr-2; }

.prev, .next {
	--at-apply: absolute;
	--at-apply: bg-red-500 text-white;
	--at-apply: p-2 sm:p-4 text-xl sm:text-2xl 2xl:text-4xl;
}

.prev, .next {
	--at-apply: hover:bg-slate-900;
	--at-apply: cursor-pointer;
}

.sombra { --at-apply: absolute bg-black/50 w-full h-full z-2; }

.dot { --at-apply: hover:cursor-pointer; }
</style>
