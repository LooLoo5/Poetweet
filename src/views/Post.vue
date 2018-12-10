<template>
    <div id="postList">
        <button
                class="btn float-right btn-outline-primary"
                v-on:click="toggleDarkMode">
                    Toggle {{ mode }} Mode
        </button>
        <transition-group name="fade">
            <div :class="{
                        post: true,
                        'bg-primary': isDark,
                        'text-light': isDark,
                        'mb-3': true,
                    }"
                v-for="post in posts"
                :key="post.id">
                <post-title :title="post.title" />
                <!-- <post-body><p class="lead">{{ post.body }}</p></post-body> -->
                <post-body><p class="lead">{{ post.lineOne }}</p></post-body>
                <post-body><p class="lead">{{ post.lineTwo }}</p></post-body>
                <post-body><p class="lead">{{ post.lineThree }}</p></post-body>
            </div>
        </transition-group>
    </div>
</template>

<script>
import Axios from 'axios';
import to from 'await-to-js';
import PostTitle from '@/components/PostTitle.vue';
import PostBody from '@/components/PostBody.vue';

export default {
    name: 'Post',
    data() {
        return {
            posts: [],
            mode: 'Light',
            isDark: true,
        };
    },
    components: {
        PostTitle,
        PostBody,
    },
    methods: {
        toggleDarkMode() {
            this.isDark = !this.isDark;
            this.mode = (this.mode === 'Light') ? 'Dark' : 'Light';
        },
    },
    computed: {
        url() {
            return this.$store.state.URL;
        },
    },
    async mounted() {
        const [postsError, posts] = await to(Axios.get(`${this.url}/api/post`));
        if (postsError) {
            console.log(postsError);
            return;
        }

        this.posts = posts.data;
    },

};
</script>

<style scoped lang="scss">
.postList {
    width: 85%;
    height: 320px;
}
#btn {
    color: #4AB3F4;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
