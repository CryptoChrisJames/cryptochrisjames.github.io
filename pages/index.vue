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
    <ContentList :query="query" v-slot="{ list }">
        <div class="content-list" v-for="blog in list" :key="blog">
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
const select = (category) => {
    selected.value = category;
};
const route = computed(() => {
    var catObj = {
        'Tech': '/tech',
        'Entertainment': '/ent',
        'Life': '/life'
    };
    return catObj[selected.value];
});
const query = { path: route, sort: [{ title: -1 }]};


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
    border-bottom: 3px solid $white;
    border-top: 3px solid $white;
    background-color: transparent;
    color: $white;
}

.selected {
    color: $white;
    border: none;
    border-bottom: 3px solid $blue;
    border-top: 3px solid $blue;
}
</style>