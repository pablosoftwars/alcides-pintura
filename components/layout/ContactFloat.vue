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
		url: 'https://wa.me/75544663?text=Buenas, una consulta:',
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
		url: 'mailto:pablquir@gmail.com?subject="Contizacion de pintado"',
		ariaLabel: 'Contactame por gmail',
		color: 'text-red-500'
	},
]
</script>
