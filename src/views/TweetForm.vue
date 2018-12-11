<template>
  <div class="container" id="tweetForm">
    <p><b>1</b> | Consider a thoughtful title.</p>
    <p><b>2</b> | Type in one word to query Twitter, returning a hopefully delightful Poetweet.</p>
    <div class="form-row mt-5">
      <label for="title"><b>Haiku's Title</b></label>
      <input type="text" name="title" class="form-control" v-model="tweet.title">
    </div>
    <div class="form-row mt-2">
      <label for="keyword"><b>Twitter Search Keyword</b></label>
      <input
        type="text"
        name="keyword"
        v-on:keypress="isLetter(event)"
        class="form-control"
        v-model="tweet.keyword"
      >
    </div>
    <button
      class="btn btn-info mt-3"
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
#tweetForm {
    margin-bottom: 14px;
}
</style>
