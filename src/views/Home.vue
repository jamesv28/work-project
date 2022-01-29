<template>
<section class="opening row">
  <div class="container-fluid">
    <h1 class="text-center">Hello!</h1>
    <p class="text-center">Welcome to my random proejct!</p>
  </div>
</section>
<section class="container-fluid options">
  <div class="row">
    <div class="col-md-3 col-sm-8 offset-sm-2">
      <h2 class="text-center">Giphy</h2>
      <p>Search these hilarious and interesting gifs from your boys at Giphy, or find out what's trending right now.</p>
      <p class="text-center">
        <router-link :to="{name: 'Giphy'}">Go to Giphy Page </router-link>
      </p>
    </div>
    <div class="col-md-3 col-sm-8 offset-sm-2">
      <h2 class="text-center">Dolph'd</h2>
      <p>Using omdb's api, find all of the movies Dolph Lundgren has been gracious enough to be a part of.</p>
      <p class="text-center">
        <router-link :to="{name: 'Movie'}" class="text-center">Go to Dolph'd</router-link>
      </p>
    </div>
  </div>
</section>

</template>

<script>

export default {
  name: 'Home',

}
</script>

<style scoped>
.opening {
  margin-top: 40px;
}

.options {
  margin-top: 24px;
}
</style>
