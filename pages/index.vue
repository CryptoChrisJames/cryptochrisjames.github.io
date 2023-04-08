<template>
    <div>
        <h3 class="welcome">
            Welcome to the blog of Christopher James Smith (CryptoChrisJames)! 
            This is the place where I discuss technology, entertainment, 
            and everything else in between. 
        </h3>
    </div>
    <div class="category-picker">
        <div class="category" v-for="category in categories" :key="category">
            <button @click="(getBlogs(category))">{{ category }}</button>
        </div>
    </div>
    <span class="blog-list">
        <div class="content-list" v-for="post in currentBlogs" :key="post.id">
            <div @click="goToPost(post._path)">
                <h1>{{ post.title }}</h1>
            </div>
        </div>
    </span>
</template>

<script setup>
import { ref } from 'vue';
const router = useRouter();
const categories = ['Tech', 'Entertainment', 'Life'];
const currentBlogs = ref([]);
const getBlogs = async (category) => {
    var categories = {
        'Tech': '/tech',
        'Entertainment': '/ent',
        'Life': '/life'
    };
    var currentCatgeory = category == null ? 'Tech' : categories[category];
    const { data } = await useAsyncData('home', () => queryContent(`${currentCatgeory}`).find());
    currentBlogs.value = data.value;
};

const { data } = await useAsyncData('home', () => queryContent('/tech').find());
currentBlogs.value = data.value;

const goToPost = (path) => {
    router.push(`post${path}`);
};
</script>

