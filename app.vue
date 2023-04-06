<template>
  <div class="container">
    <div class="header">
      <span @click="goHome()">
        <div class="img-container">
          <img src="./assets/images/header.jpg" alt="" class="header-img">
        </div>
      </span>
      <nav class="navbar">
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup>
const goHome = async () => {
  await navigateTo('/');
}
</script>


<style lang="scss">
@import './assets/styles/colors';

body, html{
  background-color: $black;
  color: $white;
  margin: 0;
  padding: 0;
  height: 100%;
}

.container {
  max-width: 777px;
  margin: 0 auto;
  height: 100vh;
  display: flex; /* use Flexbox layout */
  flex-direction: column;
}

.content {
  flex: 1;
}

.img-container {
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}
</style>