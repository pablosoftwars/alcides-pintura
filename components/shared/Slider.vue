<template>
	<div class="loader border border-solid border-black">
		<div class="drops bg-red-500">
			<div class="drop1"></div>
			<div class="drop2"></div>  
		</div>
</div>
</template>
<script setup>
onMounted(() => { })
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes drop {
  0% {
    bottom: 0px;
    opacity: 1;
  }
  
  80% {
    opacity: 1;
  }
  
  100% {
    opacity: 1;
    bottom: -200px;
  }
}

@keyframes wave {
  0% {
    background-position: 0 160px;
    background-size: 170px 300px;
  }
  
  100% {
    background-position: 500px -18px;
    background-size: 250px 150px;
  }
}

.loader {
  width: 120px;
  height: 120px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  line-height: 120px;
  font-family: sans-serif;
  color: #ffffff;
  font-size: 16px;
}

.loader span {
  z-index: 3;
}


.drops {
  -webkit-filter: url('#liquid');
  filter: url('#liquid');
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index: 1;
  opacity: 1;
}

.drop1 , .drop2 {
  width: 21px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #10a7c1
}

.drop1 {
  width: 90px;
  height: 16px;
  bottom: 2px;
  border-radius: 0;
}

.drop2 {
  animation: drop 1.3s cubic-bezier(1,.19,.66,.12) .5s infinite;
}
</style>
