<template>
    <div class="container-fluid">
        <div class="row">
            <!-- dolph lundgren movie lookup -->
            <div class="col-md-3 col-sm-4 movies">
                <h2 class="text-center opening" id="movie-select">Select movie</h2>
                <ul >
                    <li v-for="movie in movies" :key="movie.id" aria-describedby="movie-select" @click.prevent="selectMovie($event)" :id="movie.movie">
                        <a href="#">{{movie.movie}}</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-8 col-sm-7 opening mContent">
                <h1 class="text-center">Dolph'd</h1>
                <p class="text-center">Click on any one of these cinematic gems to see how truly great the movie is.</p>
                <div v-if="movieInfo.length >= 1">
                    <div class="col-md-8 offset-md-2">
                        <movie-info :movie="movieInfo[0]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dolphData from '@/includes/movie-data';
import axios from 'axios';
import MovieInfo from '@/components/MovieInfo.vue';

export default {
    name: 'MovieView',
    data() {
        return {
            movies: dolphData,
            movieInfo: [],
        }
    },
    components: {
        MovieInfo
    },
    methods: {
        async selectMovie(e) {
            const api_key = 'c762050b';
            const movieTitle = e.target.childNodes[0].data; 
            const url = `https://www.omdbapi.com/?apikey=${api_key}&t=${movieTitle}`; 
            this.movieInfo = [];
            try {
                const res = await axios.get(url);
                this.movieInfo.push(res.data);
            } catch(err) {
                console.error('error', err);
            }
        },
    }
}
</script>

<style scoped>
.opening {
    padding-top: 24px;
}
.movies {
    border-right: 2px solid black;
    height: 100vh;
    overflow-y: scroll;
}
ul {
    list-style-type: none;
}
li {
    cursor: pointer;
    margin-bottom: 12px;
}
a {
    text-decoration: none;
    color: black;
}
a:hover {
    text-decoration: none;
    border-bottom: none;
    color: black;
}
a:active, a:focus {
    outline: none;
}
@media screen and (max-width: 800px) {
     .movies {
         width: 150px;
     }
     .mContent {
         width: 200px;
     }
  }
</style>