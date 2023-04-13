import { onMounted , onUnmounted, ref, computed } from 'vue'

type BreakPoint = { min: number, max: number }
type BreakPoints = Record<string, BreakPoint>

export const useBreak = () => {

	const mobilFirst:BreakPoints = {
		sm: { min: 0, max: 639 },
		md: { min: 640, max: 1023 },
		lg: { min: 1024, max: 1279 },
		xl: { min: 1280, max: 1535 },
		xxl: { min: 1536, max: Infinity }
	}

	const currentBreakPoint = ref('')

	//usamos la desestructuracion para obtener el minimo y el maximo 
	//y comparamos con el ancho de la pantalla
	const handleResize = (breakpoints:BreakPoints):void => {
		for(const breakpoint in breakpoints) {
			const { min, max }= mobilFirst[breakpoint]
			if(window.innerWidth >= min && window.innerWidth <= max) {
				currentBreakPoint.value = breakpoint
			}

		}
	}

	//auxiliares que retorna true o false
	let isSm = computed(() => currentBreakPoint.value === "sm")
	let isMd = computed(() => currentBreakPoint.value === "md")
	let isLg = computed(() => currentBreakPoint.value === "lg")
	let isXl = computed(() => currentBreakPoint.value === "xl")
	let isXxl = computed(() => currentBreakPoint.value === "xxl")

	onMounted(() => {
		handleResize(mobilFirst)
		window.addEventListener('resize', () => handleResize(mobilFirst))
	})

	onUnmounted(() => {
		window.removeEventListener('resize', () => handleResize(mobilFirst))
	})

	return { currentBreakPoint, isSm, isMd, isLg, isXl, isXxl }
}
