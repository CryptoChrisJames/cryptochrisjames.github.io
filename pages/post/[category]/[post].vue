<template>
    <div v-if="data" class="article">
        <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
        </ContentRenderer>
    </div>
</template>

<script setup>
const { category, post } = useRoute().params;
const { data } = await useAsyncData('post', 
    () => queryContent(`/${category}/${post}`).findOne());
</script>