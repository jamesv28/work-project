<template>
  <section class="container-fluid mTop">
      <div class="row" v-if="weather == null">
            <h2 class="text-center">Getting you current location</h2>    
            <div class="text-center">
                <i class="fas fa-spinner fa-pulse fa-3x"></i>
            </div>
      </div>
      <div class="row" v-else>
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center">Today's weather </h2>  
            <img class="center-image" :src="'http://openweathermap.org/img/wn/' + weather.current.weather[0].icon + '@2x.png'" alt=""/>      
            <p class="text-center">{{weather.current.weather[0].description}}</p>
            <p class="text-center">Current: {{Math.trunc(weather.current.temp)}}</p>  
            <p class="text-center">Humidity: {{weather.current.humidity}}%</p>  
            <h5 class="text-center">5-day forecast</h5>
            <div class="d-flex align-items-center justify-content-center">
                <day-info v-for="day in weather.daily.slice(0,5)" :day="day" :key="day.dt"></day-info>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios';
import DayInfo from '@/components/DayInfo.vue';

export default {
    name: 'WeatherView',
    data() {
        return {
            location: null,
            errorStr: '',
            weather: null
        }
    },
    components: {
        DayInfo
    },
    created() {
        if(!("geolocation" in navigator)) {
            this.errorStr = 'Geolocation is not available.';
            return;
         }
        navigator.geolocation.getCurrentPosition(pos => {
            this.location = pos;
            const api_key = '5b019af93359031d79dfcfea3eddd534';
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.location.coords.latitude}&lon=${this.location.coords.longitude}&exclude={part}&appid=${api_key}&exclude=hourly,minutely&units=imperial`;
            axios.get(url)
                    .then(res => {
                        this.weather = res.data;
                    }).catch(err => {
                        console.error('error', err);
                    })
        }, err => {
            this.errorStr = err.message
        })

    },
}
</script>

<style>
.mTop {
    margin-top: 40px;
}
.center-image {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 50%;
}
</style>