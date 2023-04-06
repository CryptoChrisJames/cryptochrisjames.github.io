<template>
    <div v-if="data" class="article">
        <span v-for="b in data" :key="b.id">
            <span v-if="b._path == path">
                <ContentRenderer>
                    <ContentRendererMarkdown  :value="b" />
                </ContentRenderer>
            </span>
        </span>
    </div>
</template>

<script setup>
const { category, post } = useRoute().params;
const path = `/${category}/${post}`
const { data } = await useAsyncData('post', 
    () => queryContent(`/${category}`).find());
</script>