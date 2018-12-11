<template>
  <div id="postList" class="p-3 mb-2 text-black">
    <button
      class="btn float-right btn-outline-dark"
      v-on:click="toggleDarkMode"
    >Toggle {{ mode }} Mode</button>
    <transition-group name="fade">
      <div
        :class="{
                        post: true,
                        'bg-info': isDark,
                        'text-light': isDark,
                        'mb-3': true,
                        'border border-info': true,
                        'rounded': true,
                        'pb-2': true,
                    }"
        v-for="post in reverseItems"
        :key="post.id">
        <post-title :title="post.title"/>
        <post-body>
          <p class="lead">{{ post.lineOne }}</p>
          <p class="lead">{{ post.lineTwo }}</p>
          <p class="lead">{{ post.lineThree }}</p>
        </post-body>
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
            this.mode = this.mode === 'Light' ? 'Dark' : 'Light';
        },
    },
    computed: {
        url() {
            return this.$store.state.URL;
        },
        reverseItems() {
            return this.posts.slice().reverse();
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
p {
    margin-bottom: 0;
}
#btn {
    color: #4ab3f4;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
