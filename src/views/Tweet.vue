<template>
    <div id="tweetList">
        <button
                class="btn float-right btn-outline-primary"
                v-on:click="toggleDarkMode">
                    Toggle {{ mode }} Mode
        </button>
        <transition-group name="fade">
            <div :class="{
                        tweet: true,
                        'bg-primary': isDark,
                        'text-light': isDark,
                        'mb-3': true,
                    }"
                v-for="tweet in tweets"
                :key="tweet.id">
                <tweet-title :title="tweet.title" />
                <tweet-body><p class="lead">{{ tweet.lineOne }}</p></tweet-body>
                <tweet-body><p class="lead">{{ tweet.lineTwo }}</p></tweet-body>
                <tweet-body><p class="lead">{{ tweet.lineThree }}</p></tweet-body>
            </div>
        </transition-group>
    </div>
</template>

<script>
import Axios from 'axios';
import to from 'await-to-js';
import TweetTitle from '@/components/TweetTitle.vue';
import TweetBody from '@/components/TweetBody.vue';

export default {
    name: 'Tweet',
    data() {
        return {
            tweets: [],
            mode: 'Light',
            isDark: true,
        };
    },
    components: {
        TweetTitle,
        TweetBody,
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
        const [postsError, tweets] = await to(Axios.get(`${this.url}/api/tweet`));
        if (postsError) {
            console.log(postsError);
            return;
        }

        this.tweets = tweets.data;
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
