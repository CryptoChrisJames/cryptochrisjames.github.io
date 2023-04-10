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
                <button 
                    class="selector" 
                    :class="[{'selected': selected == category}]" 
                    @click="(select(category))"
                >
                    {{ category }}
                </button>
            </div>
        </div>
    </div>
    <span v-for="blogs in blogsList" :key="blogs">
        <span v-if="blogs.name == selected">
            <span v-if="hasBlogs(blogs)">
                <div class="content-list" v-for="blog in blogs.blogs" :key="blog">
                    <div class="article-container" @click="goToPost(blog._path)">
                        <div class="image-container">
                            <img :src="blog.img" alt="your image description">
                        </div>
                        <div class="text-container">
                            <h2>{{ blog.title }}</h2>
                            <p>{{ blog.description }}</p>
                            <p>{{ blog.date }}</p>
                        </div>
                    </div>
                </div>
            </span>            
            <span v-else>
                <h3>
                    There's currently no articles in this category. 
                    Please check again later.
                </h3>
            </span>           
        </span>
    </span>
</template>

<script setup>
import { ref } from 'vue';

const router = useRouter();
const categories = ['Tech', 'Entertainment', 'Life'];
const routes = {
    'Tech': '/tech',
    'Entertainment': '/ent',
    'Life': '/life'
};
const blogsList = [];
const selected = ref('Tech');
const select = (category) => {
    selected.value = category;
};

for(var i = 0; i < categories.length; i++) {
    const category = categories[i];
    const { data } = await useAsyncData(category, 
        () => queryContent(`${routes[category]}`)
            .only(['title', '_path', 'description', 'img', 'date'])
            .sort({ date: -1 })
            .find());
    var blog = {
        name: category,
        blogs: data._rawValue
    }
    blogsList.push(blog);
};

const hasBlogs = (blogs) =>  { return blogs.blogs.length > 0 };

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
    border-top: 2px solid $white;
    background-color: transparent;
    color: $white;
}

.selected {
    color: $yellow;
    border: none;
    border-bottom: 2px solid $blue;
    border-top: 2px solid $blue;
}

.article-container {
    padding: 25px;
    display: flex;
}

.image-container {
    display: flex;
    flex-basis: 50%;
    align-items: center; 
    justify-content: center;
}

.image-container img {
    display: block;
    width: 100%;
    height: auto;
}

.text-container {
    flex-grow: 1;
    padding-left: 20px;
}

.text-container h2 {
    color: $yellow;
    margin-top: 0; 
}
</style>