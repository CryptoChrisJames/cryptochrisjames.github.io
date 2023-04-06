<template>
    <ContentRenderer>
        <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
</template>

<script setup>
const { category, post } = useRoute().params;
const { data } = await useAsyncData('post', 
    () => queryContent(`/${category}/${post}`).findOne());
</script>