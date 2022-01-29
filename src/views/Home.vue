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
        <h2 class="text-center">Words</h2>
        <p>Find the definition and synonyms for your favorite words</p>
    </div>
    <div class="col-md-3 col-sm-8 offset-sm-2">
      <h2 class="text-center">Giphy</h2>
      <p>Find these hilarious and interesting giphs from your boys at Giphy</p>
      <p class="text-center">
        <router-link :to="{name: 'Giphy'}">Go to Giphy Page </router-link>
      </p>
    </div>

  </div>
</section>
  </section>

</template>

<script>

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
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
