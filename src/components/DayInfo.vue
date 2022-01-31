<template>
  <div class="i-block">
      <img :src="'https://openweathermap.org/img/wn/' + day.weather[0].icon + '.png'" alt="" />
      <p class="text-center">{{Math.trunc(day.temp.max)}}</p>
  </div>  
</template>

<script>
export default {
    name: 'DayInfo',
    props: ['day']
}
</script>

<style scoped>
.i-block {
    display: inline-block;
}
.i-block:hover {
    background-color: #C9C9C9;
}
</style>