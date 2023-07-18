<template>
	<div class="navtop-container">
		<ul>
			<li v-for="(item, i) in listRoutes" :key="i">
				<NuxtLink :to="item.path" @click="onAnimationDrop(i)" class="route-link">

					<!-- animacion gotas -->
					<div class="drops">
						<div class="drop1"></div>
						<div class="drop2"></div>
					</div>
					
					{{ item.name }}
				</NuxtLink>
			</li>
		</ul>
	</div>

	<!-- filter svg necesario para la animation de gotas -->
	<svg class="display-none border border-solid" xmlns="http://www.w3.org/2000/svg" version="1.1">
		<defs>
			<filter id="liquid">
				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
			</filter>
		</defs>
	</svg>
</template>

<script setup lang="ts">
type Routes = { name:string, path:string, bg:string };

let listRoutes:Routes[]= [
	{ name : 'Inicio', path: '/', bg: 'bg-red-500' },
	{ name: 'Nosotros', path: '/about', bg: 'bg-red-500' },
	{ name: 'Servicios', path: '/service', bg: 'bg-red-500' },
	{ name: 'Precios', path: '/price', bg: 'bg-red-500' },
	{ name: 'Contacto', path: '/contact', bg: 'bg-red-500' }
]

let elementDrop: HTMLCollection | null
let elementsContainer: HTMLCollection | null
let isLinkActive:boolean

// anima el index seleccionado
let onAnimationDrop = (indexElement: number):void => {
	let drops = document.querySelectorAll('.drop1')
	drops.forEach(drop => drop.classList.remove('animation-paint'))
	drops[indexElement].classList.add('animation-paint')
}

onBeforeMount(() => {
	let linkActive = document.querySelector('.router-link-active')
	let pathRef = linkActive?.getAttribute('href')

	//iniciar animacion gotas en link active
	for(let i = 0; i < listRoutes.length; i++) {
		if(pathRef == listRoutes[i].path) {
			onAnimationDrop(i)
		}
	}
})


</script>

<style scoped>
.navtop-container { --at-apply: z-2 flex sticky top-0 left-0 w-full; }

.navtop-container ul {
	--at-apply: flex flex-row list-none top-0 left-0 m-0 p-0 w-full;
}

.navtop-container ul li {
	--at-apply: relative flex-grow;
	--at-apply: hover:cursor-pointer;
}

.router-link-exact-active,
.router-link-exact-active .drop1,
.router-link-exact-active .drop2
{
	background-color: #ef4444 !important;
}

.navtop-container ul li a {
	--at-apply: no-underline text-white text-lg font-bold w-full;
}
.route-link {
	--at-apply: text-center py-4 left-0 top-0 bg-slate-900;
	display: inline-block;
}

.drops {
	--at-apply: absolute w-full h-full bottom-3px left-0;
	--at-apply: bottom-3px left-0 z-1;
	filter: url('#liquid');
}


.drop1, .drop2 {
	--at-apply: w-1/3 h-14px;
	--at-apply: rounded-full;
	--at-apply: absolute left-0 right-0 bottom-0 m-auto;
}

.animation-paint {
	animation: drop 1.3s cubic-bezier(1, .29, .66, .12) infinite;
}

@keyframes drop {
	0% {
		bottom: 0px;
		opacity: 1;
		width: 24px;
		height: 24px;
	}

	80% { opacity: 1; }

	100% {
		opacity: 1;
		bottom: -100px;
		width: 24px;
		height: 20px;
	}
}

</style>
