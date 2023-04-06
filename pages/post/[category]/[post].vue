<template>
    <div v-if="blog" class="article">
        <ContentRenderer>
            <ContentRendererMarkdown  :value="blog" />
        </ContentRenderer>
    </div>
</template>

<script setup>
const { category, post } = useRoute().params;
const path = `/${category}/${post}`
const { data } = await useAsyncData('post', 
    () => queryContent(`/${category}`).find());
const blog = data._rawValue.find(b => b._path == path);
</script>