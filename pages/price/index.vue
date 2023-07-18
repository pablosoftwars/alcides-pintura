<template>
	<div ref="containerPrice" class="container-price">
		 <h1>Calculadora de Pintura</h1>
			<form class="bg-gray-100 p-8 text-lg">
				<label for="longitud">Longitud:</label>
				<input type="number" id="longitud" name="longitud"><br>

				<label for="altura">Altura:</label>
				<input type="number" id="altura" name="altura"><br>

				<label for="tipo-superficie">Tipo de superficie:</label>
				<select id="tipo-superficie" name="tipo-superficie">
					<option value="pared-interior">Pared interior</option>
					<option value="pared-exterior">Pared exterior</option>
					<option value="baranda">Baranda</option>
					<option value="reja-metalica">Reja metálica</option>
				</select><br>

				<label for="numero-capas">Numero de Capas:</label>
				<input type="number" id="numero-capa" name="capas"><br>

				<button type="button" @click="calcular()">Calcular</button>
				<button type="button" @click="calcular()">Reiniciar</button>
			</form>

			<p id="resultado"></p>
	</div>
</template>

<script setup>

let calcular  = null

onMounted(() => {
	const PRECIO_POR_METRO_CUADRADO = 1000;

	calcular = () => {
        const longitud = document.getElementById("longitud").value;
        const altura = document.getElementById("altura").value;
        const tipoSuperficie = document.getElementById("tipo-superficie").value;

        let precio = 0;

        switch (tipoSuperficie) {
          case "pared-interior":
            precio = PRECIO_POR_METRO_CUADRADO * longitud * altura;
            break;
          case "pared-exterior":
            precio = PRECIO_POR_METRO_CUADRADO * longitud * altura * 1.5;
            break;
          case "baranda":
            precio = PRECIO_POR_METRO_CUADRADO * longitud * 1.2;
            break;
          case "reja-metalica":
            precio = PRECIO_POR_METRO_CUADRADO * longitud * 1.5;
            break;
          default:
            break;
        }

        document.getElementById("resultado").innerHTML = `El costo total es: Bs. ${precio}`;
      }
})
</script>
<style scoped>
.container-price {
	--at-apply: flex flex-col justify-center items-center container mx-auto;
	--at-apply: w-full;
	--at-apply: py-20 sm:py-30;
}
</style>
