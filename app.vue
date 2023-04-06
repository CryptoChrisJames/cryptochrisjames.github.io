<template>
  <div class="container">
    <div class="header">
      <div class="header-container">
        <img src="./assets/images/header.jpg" alt="" class="header-img">
        <div class="navbar">
          <h1>CCJ BLOG</h1>
          <ul>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <NuxtPage/>
    </div>
    <div class="header">
      <div class="header-container">
        <img src="./assets/images/footer.jpg" alt="" class="header-img">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/styles/colors';

body, html{
  background-color: $black;
  color: $white;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>