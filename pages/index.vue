<template>
    test1
    <div class="content-list" v-for="post in data" :key="post.id">
        <h1>{{ post.title }}</h1>
    </div>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/tech').find())
console.log(data);
</script>
