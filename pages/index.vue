<template>
    <span v-if="data">
        <div class="content-list" v-for="post in data" :key="post.id">
            <div @click="goToPost(post._path)">
                <h1>{{ post.title }}</h1>
            </div>
        </div>
    </span>
</template>

<script setup>
const router = useRouter();
const { data } = await useAsyncData('home', () => queryContent('/tech').find());
const goToPost = (path) => {
    router.push(`post${path}`);
};
</script>
