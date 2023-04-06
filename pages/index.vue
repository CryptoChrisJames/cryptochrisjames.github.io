<template>
    <div>
        <h3 class="welcome">
            Welcome to the blog of Christopher James Smith (CryptoChrisJames)! 
            This is the place where I discuss technology, entertainment, 
            and everything else in between. 
        </h3>
    </div>
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

