<template>
  <div class="row mtop">
    <div class="container-fluid">
       <h1 class="text-center"><strong class="bad">Br</strong>eaking <br /><strong class="bad">Ba</strong>d </h1>  
       <p class="text-center">A simple app to review the cast of Breaking Bad</p>  
    </div>    
  </div>  

  <div class="row" v-if="characters == null">
      <div class="container-fluid">
          <h2 class="text-center">Loading...</h2>
      </div>
  </div>
  <div class="container-fluid" v-else-if="characters">
      <div class="row">
          <bad-characters v-for="character in characters" :character="character" :key="character.char_id" />
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import BadCharacters from '@/components/BadCharacters.vue';

export default {
    name: 'BreakingBad',
    data() {
        return {
            url: 'https://www.breakingbadapi.com/api/',
            characters: null,
        }
    },
    components: {
        BadCharacters
    },
    beforeMount() {
        axios.get(`${this.url}characters`)
            .then(res => {
                this.characters = res.data;
            }).catch(err => {
                console.error('error', err);
        });

    },
}
</script>

<style scoped>
.mtop {
    margin-top: 40px;
}
.grouping {
    margin-top: 12px;
    margin-bottom: 12px;
}
.bad {
    background-color: #10630286;
    color:white;
    padding-top: 1px;
    padding-bottom: 1px;
}
</style>