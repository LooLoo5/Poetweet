<template>
  <div class="container" id="tweetForm">
    <div class="form-row">
      <label for="title">Haiku's Title</label>
      <input type="text" name="title" class="form-control" v-model="tweet.title">
    </div>
    <div class="form-row mt-2">
      <label for="keyword">Twitter Search Keyword</label>
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
    >Create a Haiku</button>
  </div>
</template>

<script>
import Axios from "axios";
import to from "await-to-js";

export default {
    name: "TweetForm",
    data() {
        return {
            tweet: {
                title: null,
                keyword: null
            },
            isSubmitting: false
        };
    },
    methods: {
        async submitForm() {
            this.isSubmitting = true;
            const url = `${this.url}/api/tweet`;
            const [newPostError, newPost] = await to(
                Axios.post(url, this.tweet)
            );
            if (newPostError) {
                console.log(newPostError);
                return;
            }
            console.log(newPost);
            setTimeout(() => {
                this.$router.push({ name: "tweets" });
            }, 1000);
        },
        isLetter(e) {
            if (
                "abcdefghijklmnopqrstuvwxyz ".indexOf(
                    String.fromCharCode(e.keyCode)
                ) === -1
            ) {
                e.preventDefault();
                return false;
            }
            return e;
        }
    },
    computed: {
        url() {
            return this.$store.state.URL;
        }
    }
};
</script>

<style lang="scss" scoped>
#tweetForm {
    margin-bottom: 14px;
}
</style>
