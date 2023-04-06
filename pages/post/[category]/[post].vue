<template>
    <ContentDoc :path="`/${category}/${post}`" />
</template>

<script setup>
const { category, post } = useRoute().params;
</script>