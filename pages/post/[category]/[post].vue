<template>
    <div v-if="$route.params" class="blog-article">
        <ContentDoc :path="blogPath" />
    </div>
</template>

<script setup>
const { category, post } = useRoute().params;
const blogPath = `/${category}/${post}`;
</script>