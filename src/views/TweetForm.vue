<template>
  <div class="container" id="tweetForm">
    <p>
      <b>1</b> | Type in one word to query Twitter, returning a hopefully delightful Poetweet.
    </p>
    <p>
      <b>2</b> | Consider a thoughtful title.
    </p>
    <div class="form-row mt-5">
      <label for="keyword">
        <b>Twitter Search Keyword</b>
      </label>
      <input
        type="text"
        name="keyword"
        v-on:keypress="isLetter(event)"
        class="form-control"
        v-model="tweet.keyword"
        placeholder="one special word"
      >
    </div>
    <div class="form-row mt-2">
      <label for="title">
        <b>Haiku's Title</b>
      </label>
      <input
        type="text"
        name="title"
        class="form-control"
        placeholder="get creative"
        v-model="tweet.title"
      >
    </div>
    <button
      class="btn mt-3"
      id="twitter-blue"
      v-on:click="submitForm()"
      :disabled="isSubmitting"
    >Create Haiku</button>
  </div>
</template>

<script>
import Axios from 'axios';
import to from 'await-to-js';

export default {
    name: 'TweetForm',
    data() {
        return {
            tweet: {
                title: null,
                keyword: null,
            },
            isSubmitting: false,
        };
    },
    methods: {
        async submitForm() {
            this.isSubmitting = true;
            const url = `${this.url}/api/tweet`;
            const [newPostError, newPost] = await to(
                Axios.post(url, this.tweet),
            );
            if (newPostError) {
                console.log(newPostError);
                return;
            }
            console.log(newPost);
            setTimeout(() => {
                this.$router.push({ name: 'tweets' });
            }, 1000);
        },
        isLetter(e) {
            if (
                'abcdefghijklmnopqrstuvwxyz '.indexOf(
                    String.fromCharCode(e.keyCode),
                ) === -1
            ) {
                e.preventDefault();
                return false;
            }
            return e;
        },
    },
    computed: {
        url() {
            return this.$store.state.URL;
        },
    },
};
</script>

<style lang="scss" scoped>
#twitter-blue {
    color: #1ca1f1;
    font-weight: bold;
}
</style>
