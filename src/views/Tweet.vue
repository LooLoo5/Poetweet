<template>
  <div id="tweetList" class="p-3 mb-2 text-black">
    <button
      class="btn float-right btn-outline-dark"
      v-on:click="toggleDarkMode"
    >Toggle {{ mode }} Mode</button>
    <transition-group name="fade">
      <div
        :class="{
                        tweet: true,
                        'bg-info': isDark,
                        'text-light': isDark,
                        'mb-3': true,
                        'border border-info': true,
                        'rounded': true,
                        'pb-2': true,
                    }"
        v-for="tweet in reverseItems"
        :key="tweet.id"
      >
        <tweet-title :title="tweet.title"/>
        <tweet-body>
          <p class="lead">{{ tweet.lineOne }}</p>
          <p class="lead">{{ tweet.lineTwo }}</p>
          <p class="lead">{{ tweet.lineThree }}</p>
        </tweet-body>
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
            this.mode = this.mode === 'Light' ? 'Dark' : 'Light';
        },
    },
    computed: {
        url() {
            return this.$store.state.URL;
        },
        reverseItems() {
            return this.tweets.slice().reverse();
        },
    },
    async mounted() {
        const [postsError, tweets] = await to(
            Axios.get(`${this.url}/api/tweet`),
        );
        if (postsError) {
            console.log(postsError);
            return;
        }

        this.tweets = tweets.data;
        console.log(tweets.data);
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
