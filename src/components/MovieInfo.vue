<template>
  <div>
    <h4 class="text-center"> {{movie.Title}} </h4>
    <img class="poster" :src="movie.Poster" :alt="movie.title" />
    <p><strong>Actors: </strong> {{movie.Actors}} </p>
    <p><strong>Director:</strong> {{movie.Director}} </p>
    <p><strong>Plot:</strong> {{movie.Plot}}</p>
    <p><strong>Awards:</strong> {{movie.Awards}} </p>
    <p><strong>Rated: </strong> {{movie.Rated}} </p>
    <p><strong>Released: </strong> {{movie.Released}} </p>
    <p><strong>RunTime: </strong> {{movie.Runtime}} </p>
  </div>
</template>

<script>
export default {
    name: 'MovieInfo' ,
    props: ['movie']
}
</script>

<style scoped>
.poster {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-bottom: 16px;
}

strong {
    font-weight: bold;
}
</style>