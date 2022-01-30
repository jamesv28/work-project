<template>
  <section class="container-fluid">
      <div class="row">
          <h2> Weather </h2>
          <button class="btn btn-outline-primary" :click.prevent="returnWeather">Get lat and long </button>
      </div>
  </section>
</template>

<script>
export default {
    name: 'WeatherView',
    data() {
        return {
            lat: '',
            long: ''
        }
    },
    methods: {
        returnWeather() {
            console.log(this.long);
            
            // const api_key = '5b019af93359031d79dfcfea3eddd534';
            // const url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${api_key}`
        }
    },
    beforeMount() {
        // this.long = geolocationCoordinatesInstance.longitude;
        // this.lat = geolocationCoordinatesInstance.lattitude
    }
}
</script>

<style>

</style>