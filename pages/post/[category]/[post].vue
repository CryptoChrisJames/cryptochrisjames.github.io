<template>
    <div v-if="currentBlog" class="article">
        <ContentRenderer>
            <ContentRendererMarkdown  :value="currentBlog" />
        </ContentRenderer>
        <div class="article-nav">
            <div v-if="previousBlog" @click="goToPost(previousBlog._path)" class="article-nav-previous">
                <span class="article-nav-previous-text">
                    Previous
                </span>
                <span class="article-nav-previous-title">
                    {{ previousBlog._path }}
                </span>
            </div>
            <div v-if="nextBlog" @click="goToPost(nextBlog._path)" class="article-nav-next">
                <span class="article-nav-next-text">
                    Next
                </span>
                <span class="article-nav-next-title">
                    {{ nextBlog._path }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { category, post } = useRoute().params;
const router = useRouter();
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