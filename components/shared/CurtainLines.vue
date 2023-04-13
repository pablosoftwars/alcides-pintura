<template>
	<div ref="containerBar" class="container-bars">
		<div v-for="(item,i) in 3" :key="i" class="bar-item" >
			<div v-for="(item,x) in 2" :key="x" class="square-item"></div>
		</div>
	</div>
</template>

<script setup>
import { gsap } from 'gsap'

//necesitamos la orientacion para inicializar y activar la animacion bajo demanda
const props = defineProps({
	lineOrientation: { type: String, default: 'slideLeft' },
	activeAnim: { type: Boolean, default: false }
})

//creamos un objeto con los datos para iniciar('boot ')y animar('animation') segun la orientacion de la cortina
let barras = {
	slideTop: {
		boot: {
			container: { flexDirection: 'row' },
			bar: { x: null, y: '100%', flexDirection: 'column', justifyContent: 'start'},
			square: { height: '0%', width: '100%'},
			activeAnim: false
		},
		animation: {
			square: { height: '10%', width: '100%'},
			activeAnim: true
		}
	},
	slideBottom: {
		boot: {
			container: { flexDirection: 'row' },
			bar: { x: null, y: '-100%', flexDirection: 'column', justifyContent: 'end'},
			square: { height: '0%', width: '100%'},
			activeAnim: false
		},
		animation: {
			square: { height: '10%', width: '100%'},
			activeAnim: true
		}
	},
	slideRight: {
		boot: {
			container: { flexDirection: 'column' },
			bar: { x: '100%', y: null, flexDirection: 'row', justifyContent: 'start'},
			square: { height: '100%', width: '0%'},
			activeAnim: false
		},
		animation: {
			square: { height: '100%', width: '10%'},
			activeAnim: true
		}
	},
	slideLeft: {
		boot: {
			container: { flexDirection: 'column' },
			bar: { x: '-100%', y: null, flexDirection: 'row', justifyContent: 'end'},
			square: { height: '100%', width: '0%'},
			activeAnim: false
		},
		animation: {
			square: { height: '100%', width: '10%'},
			activeAnim: true
		}
	}
}


//referenciamos el contenedorHTML para obtener las demas clases dentro del mismo componente
const containerBar = ref(null)

//la animacion consta de dos paso
let moveBars = gsap.timeline()
let scaleSquares = gsap.timeline()

//funcion que reaccionara a los cambios de props.lineOrientation a traves de un watch que se activa en onMounted
let activateAnimation = (bars, squares, isPlay) => {
	//paso1 mover las barras
	moveBars.to(bars, {
		x: barras[props.lineOrientation].boot.bar.x,
		y: barras[props.lineOrientation].boot.bar.y,
		justifyContent: barras[props.lineOrientation].boot.bar.justifyContent,
		alignContent: barras[props.lineOrientation].boot.bar.alignContent,
		ease: 'Power4.easeInOut',
		stagger: 0.3
	})


	//paso2 escalar el ancho de los cuadrados internos de cada bar
	scaleSquares.to(squares, {
		width: barras[props.lineOrientation].animation.square.width,
		height: barras[props.lineOrientation].animation.square.height
	})

	//activar animacion o pausar bajo demanda
	if(isPlay) {
		moveBars.play()
		scaleSquares.play()
	} else {
		moveBars.pause()
		scaleSquares.pause()
	}
}

onMounted(() => {
	let bars = containerBar.value.querySelectorAll('.bar-item')
	let squares = containerBar.value.querySelectorAll('.square-item')

	//inicializamos los valores de las cortinas con sus respectivas bars y cada bars con su respectivo squares
	containerBar.value.style.flexDirection = barras[props.lineOrientation].boot.container.flexDirection

	let initBars = bars.forEach( bar => {
		bar.style.flexDirection = barras[props.lineOrientation].boot.bar.flexDirection
		bar.style.justifyContent = barras[props.lineOrientation].boot.bar.justifyContent
	})

	let inistSquare = squares.forEach( square => {
		square.style.height = barras[props.lineOrientation].boot.square.height
		square.style.width = barras[props.lineOrientation].boot.square.width
	} )

	//este watch detecta cuando se haya cambiado la prop.activeAnim para activar la animacion
	watchEffect(() => {
		props.activeAnim ? activateAnimation(bars, squares, true) :activateAnimation(bars, squares,false) 
	})
})
</script>

<style scoped>
.container-bars {
	--at-apply: absolute w-full h-full flex flex-col;
	--at-apply: top-0 left-0;
	--at-apply: overflow-hidden;
	pointer-events: none;
}

.bar-item {
	/* --at-apply: border border-solid; */
	--at-apply: w-full h-full;
	--at-apply: flex bg-black;
}

.square-item {
	--at-apply: h-20 w-20 bg-red-500;
}

.square-item:nth-child(2) {
	--at-apply: bg-white;
}
</style>
