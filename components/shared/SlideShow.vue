<template>
	<div ref="slideShow" class="bg-slate-900">
		<div class="slideshow-container max-h-600px overflow-hidden item-img">

		<!-- Full-width images with number and caption text -->
			<div class="mySlides fade">
				<div class="numbertext">1 / 3</div>
				<nuxt-img src="/img/service/casa1-interior-1920w.webp" class="item-img" style="width:100%" />
				<div class="text">Caption Text</div>
			</div>

			<div class="mySlides fade">
				<div class="numbertext">2 / 3</div>
				<nuxt-img src="/img/service/casa1-exterior-1920w.webp" class="item-img" style="width:100%" />
				<div class="text">Caption Two</div>
			</div>

			<div class="mySlides fade">
				<div class="numbertext">3 / 3</div>
				<nuxt-img src="/img/service/casa-barandal-1.webp" class="item-img" style="width:100%" />
				<div class="text">Caption Three</div>
			</div>

			<!-- Next and previous buttons -->
			<a class="prev" @click="plusSlides(-1)">&#10094;</a>
			<a class="next" @click="plusSlides(1)">&#10095;</a>
		</div>

		<br>

		<!-- The dots/circles -->
		<div style="text-align:center">
			<span class="dot" @click="currentSlide(1)"></span>
			<span class="dot" @click="currentSlide(2)"></span>
			<span class="dot" @click="currentSlide(3)"></span>
		</div>

	</div>
</template>

<script setup>
let props = defineProps({
	dataImages: {
		type: Object,
		value: {

		}
	}
})

let slideShow = ref(null)
let showSlides = null
let slideIndex = 0
let plusSlides = (n) => {
	showSlides(slideIndex += n)
}

let currentSlide = (n) => {
	showSlides(slideIndex = n)
}

onMounted(() => {
	showSlides = (n) => {
		let i;
		let slides = slideShow.value.getElementsByClassName("mySlides");
		let dots = slideShow.value.getElementsByClassName("dot");
		console.log(dots)

		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
	}

	slideIndex = 0
	showSlides(slideIndex);
})

</script>

<style scoped>
.slideshow-container {
	--at-apply: w-full relative m-auto;
}

.mySlides {
	display: none;
}

.fade {
  animation-name: fade;
  animation-duration: .5s;
}


.prev, .next {
	background-color: #ef4444;
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.prev {
	left: 0;
	border-radius: 3px 0 0 3px;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active, .dot:hover {
  background-color: #ef4444;
}

@keyframes fade {
  from {opacity: .4; filter: blur(10px)}
  to {opacity: 1; filter: blur(0px)}
}

.item-img {
	background-color: red;
	box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.9);
}

</style>
