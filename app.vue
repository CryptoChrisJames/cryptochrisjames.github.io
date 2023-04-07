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
          <li><a href="https://cryptochrisjames.com">About</a></li>
          <li><a to="mailto:social@cryptochrisjames.com">Contact</a></li>
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
  height: 77px;
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

nav {
  height: 50px; /* set the height of the navigation bar */
}

nav ul {
  list-style: none; /* remove the bullet points from the list items */
  margin: 0;
  padding: 0;
  display: flex; /* use Flexbox layout to align the list items horizontally */
}

nav li {
  flex: 1; /* make the list items take up equal width */
}

nav a {
  display: block; /* make the links fill the entire width of the list item */
  color: #fff; /* set the text color of the links */
  text-decoration: none; /* remove the underline from the links */
  text-align: center; /* center the text inside the links */
  line-height: 50px; /* set the line height equal to the height of the navigation bar */
}

nav {
  height: 50px; /* set the height of the navigation bar */
}

nav ul {
  list-style: none; /* remove the bullet points from the list items */
  margin: 0;
  padding: 0;
  display: flex; /* use Flexbox layout to align the list items horizontally */
}

nav li {
  flex: 1; /* make the list items take up equal width */
}

nav a {
  display: block;
  font-size: 25px; /* make the links fill the entire width of the list item */
  color: $white; /* set the text color of the links */
  text-decoration: none; /* remove the underline from the links */
  text-align: center; /* center the text inside the links */
  line-height: 50px; /* set the line height equal to the height of the navigation bar */
  border-left: solid 1px $white;  
  border-right: solid 1px $white;
  margin: 10px 40px;
}
</style>