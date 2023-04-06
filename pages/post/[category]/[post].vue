<template>
    <ContentRenderer :value="data" />
</template>

<script setup>
const { category, post } = useRoute().params;
console.log(category, post);
const { data } = await useAsyncData('post', 
    () => queryContent().findOne({ _path: `${category}/${post}` }));
console.log(data);
</script>