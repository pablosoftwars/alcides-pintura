<template>
	<div red="containerContact" class="container-contact">
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1511.830012172555!2d-63.11946089126351!3d-17.781954701032042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1689650711983!5m2!1ses!2sbo" class="w-full h-450px border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

		<div class="container mx-auto">
			<div class="card-contact flex flex-col">
				<h2>Contacto</h2>
				<div class="flex flex-col">
					<p>
						<nuxt-icon name="location-dot-solid" />
						Ubicacion: Barrio Maritimo, Avenida Bolivia, C# 3
					</p>
					<p>
						<nuxt-icon name="phone-solid" />
						Telefono: +591 65020466
					</p>
					<p>
						<nuxt-icon name="gmail" />
						E-mail: alcidespintor@gmail.com
					</p>
					<p>
						<nuxt-icon name="clock-solid" />
						Abierto ahora
					</p>

				</div>

			</div>

		</div>
	</div>
</template>

<style scoped>
.container-contact{
	--at-apply: relative h-full w-full flex flex-col;
}
</style>
