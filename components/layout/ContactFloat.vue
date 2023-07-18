<template>
	<div class="rounded-lg">
		<ul v-for="(item, i) in listSocialNetwork" :key="i" class="list-none m-0 p-2">
			<li>
				<NuxtLink
					:to="item.url"
					target="_blanck"
					:aria-label="item.ariaLabel"
				>
					<nuxt-icon :name="item.icon" :class="[item.color, 'text-3xl']"></nuxt-icon>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
let listSocialNetwork = [
	{
		name: 'whatsapp',
		icon: 'square-whatsapp',
		url: 'https://wa.me/65020466?text=Alcides & Asociados, Haga su pregunta que le responderemos al instante',
		ariaLabel: 'Contactame por whatsapp',
		color: 'text-green-500'
	},
	{
		name: 'facebook',
		icon: 'square-facebook',
		url: 'https://www.facebook.com/pablo.quiroz2',
		ariaLabel: 'Contactame por facebook',
		color: 'text-blue-500'
	},
	{
		name: 'gmail',
		icon: 'gmail',
		url: 'mailto:pablquir@gmail.com?subject="Cotizacion de pintado"',
		ariaLabel: 'Contactame por gmail',
		color: 'text-red-500'
	},
	{
		name: 'gmail',
		icon: 'phone-solid',
		url: 'tel:+59165020466',
		ariaLabel: 'Celular 75544663',
		color: 'text-black'
	},
]
</script>
