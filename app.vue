<template>
  <div class="container">
    <nav>
      <div class="navbar-logo">
        <a @click="goHome()"><img src="./assets/images/logo.png" alt="your logo"></a>
      </div>
      <div class="navbar-links">
        <ul>
          <li><a href="https://cryptochrisjames.com">About</a></li>
          <li><a href="mailto:social@cryptochrisjames.com?subject=Reaching Out">Contact</a></li>
        </ul>
      </div>
    </nav>
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
@import './assets/styles/variables';

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

nav {
  background-color: $black;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  
    @include phone {
      box-shadow: 0 3px 13px $blue,
        0 2px 4px #467baaa8;

    }
}

.navbar-logo img {
  height: 50px; /* set the height of the logo */
}

.navbar-links ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar-links li {
  margin: 0 10px;
  font-size: 25px;;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
}

</style>