<template>
<header class="row">
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid nav-container">
      <router-link class="navbar-brand" :to="{name: 'Home'}">Pro Proj</router-link>
      <router-link class="nav-link" :to="{name: 'Giphy'}">Giph</router-link>
      <router-link class="nav-link" :to="{name: 'Movie'}">Dolph'd</router-link>
      <router-link class="nav-link" :to="{name: 'Weather'}">Weather</router-link>
    </div>
</nav>
</header>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style scoped>
.navbar {
  background-color: #800080;
}
.nav-container {
  justify-content:flex-start;
}
.navbar-brand, .nav-item, .nav-link{
    color: #faf8f0;
}

.nav-item:hover, .nav-link:hover {
  border-bottom: 2px solid #faf8f0;
}

</style>
