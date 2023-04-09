<template>
    <div>
        <h3 class="welcome">
            Welcome to the blog of Christopher James Smith (CryptoChrisJames)! 
            This is the place where I discuss technology, entertainment, 
            and everything else in between. 
        </h3>
    </div>
    <div class="picker-container">
        <div class="category-picker">
            <div class="category" v-for="category in categories" :key="category">
                <!-- <button class="selector" :class="[{'selected': selected == category}]" @click="(getBlogs(category))">{{ category }}</button> -->
            </div>
        </div>
    </div>
    <!-- <span class="blog-list">
        <div class="content-list" v-for="post in currentBlogs" :key="post.id">
            <div @click="goToPost(post._path)">
                <h1>{{ post.title }}</h1>
            </div>
        </div>
    </span> -->
    <ContentList path="/tech" v-slot="{ blogs }">
        <div class="content-list" v-for="blog in blogs" :key="blog">
            <div @click="goToPost(blog._path)">
                <h1>{{ blog.title }}</h1>
            </div>
        </div>
    </ContentList>
</template>

<script setup>
import { ref, computed } from 'vue';
const router = useRouter();
const categories = ['Tech', 'Entertainment', 'Life'];
const selected = ref('Tech');
const route = computed((selected) => {
    console.log('here')
    var categories = {
        'Tech': '/tech',
        'Entertainment': '/ent',
        'Life': '/life'
    };
    return categories[selected];
})
// const getBlogs = async (category) => {
//     selected.value = category;
//     var categories = {
//         'Tech': '/tech',
//         'Entertainment': '/ent',
//         'Life': '/life'
//     };
//     var currentCatgeory = category == null ? 'Tech' : categories[category];
//     const { data } = await useAsyncData('home', () => queryContent(`${currentCatgeory}`).sort({ title: -1 }).find());
//     currentBlogs.value = data.value;
// };

// const { data } = await useAsyncData('home', () => queryContent('/tech').find());
// currentBlogs.value = data.value;

const goToPost = (path) => {
    router.push(`post${path}`);
};
</script>

<style lang="scss" scoped>
@import './assets/styles/colors';
@import './assets/styles/variables';

.picker-container {
    margin: 0 auto;
    max-width: 444px;
}
.category-picker {
    width: 100%;
    display: flex;
    height: 48px;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    color: $white;
}

.category {
    flex: 1;
    margin: 0 auto;
}

.selector {
    width: 100%;
    height: 44px;
    font-size: 20px;
    border: none;
    border-bottom: 2px solid $white;
    background-color: transparent;
    color: $white;
}

.selected {
    color: $white;
    border: none;
    border-bottom: 2px solid $yellow;
    border-top: 2px solid $yellow;
}
</style>