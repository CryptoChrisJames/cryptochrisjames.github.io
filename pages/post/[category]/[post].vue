<template>
    <div v-if="currentBlog" class="article">
        <h2>{{ currentBlog.title }}</h2>
        <p> By Christopher Smith | {{ currentBlog.date }}</p>
        <p>{{ currentBlog.description }}</p>
        <div class="content-body">
            <ContentRenderer>
                <ContentRendererMarkdown  :value="currentBlog" />
            </ContentRenderer>
        </div>
        <div class="article-nav">
            <div v-if="previousBlog" @click="goToPost(previousBlog._path)" class="prev">
                <span class="article-nav-previous-text">
                    Previous
                </span>
                <span class="article-nav-previous-title">
                    {{ previousBlog.title }}
                </span>
            </div>
            <div v-if="nextBlog" @click="goToPost(nextBlog._path)" class="next">
                <span class="article-nav-next-text">
                    Next
                </span>
                <span class="article-nav-next-title">
                    {{ nextBlog.title }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { category, post } = useRoute().params;
const path = `/${category}/${post}`
const { data } = await useAsyncData('post', 
    () => queryContent(`/${category}`).find());

var currentBlog; 
var previousBlog;
var nextBlog;
for (var i = 0; i < data._rawValue.length; i++) {
    if (data._rawValue[i]._path == path) {
        currentBlog = data._rawValue[i];
        if (i > 0) {
            previousBlog = data._rawValue[i - 1];
        }
        if (i < data._rawValue.length - 1) {
            nextBlog = data._rawValue[i + 1];
        }
        break;
    }
}

const goToPost = async (path) => {
    await navigateTo(`/post${path}`);
};
</script>

<style lang="scss" scoped>
@import './assets/styles/colors';
@import './assets/styles/variables';

.article {
    margin: 0 auto;
    max-width: 777px;
    padding: 0 25px;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    align-items: center;
}

.article h1, h2, h3, h4, h5, h6 {
    color: $yellow;
}

.content-body {
    font-size: 15px;
}

.article-nav {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 0;

    @include phone {
        flex-direction: column;
    }
}

.prev, .next {
    background: 0 0;
    margin: 0.5rem 1rem;
    border-bottom: none;
    transition: all .2s ease;
    padding: 1.5rem .1rem;
    border-radius: 0.35rem;
    flex: 0 0 calc(50% - 2rem);
    background-color: #2c2e42;
    display: flex;
    flex-direction: column;
    @include phone {
        margin: .5rem 0;
    }
}

.prev span, .next span {
    padding: 0 15px;
    font-weight: 400;
    font-size: 18px;
}

.prev {
    order: 1;
    text-align: right;
    @include phone {
        text-align: left;
    }
}

.next {
    order: 2;
    margin-left: auto;
    @include phone {
        margin-left: 0;
    }
}
</style>