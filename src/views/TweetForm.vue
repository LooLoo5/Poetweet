<template>
  <div class="container" id="tweetForm">
    <div class="form-row">
      <label for="keyword">Keyword</label>
      <input type="text" name="keyword" class="form-control" v-model="post.keyword">
    </div>
    <!-- <div class="form-row">
      <label for="keyword">Body</label>
      <textarea name="body" v-model="post.body" class="form-control"/>
    </div> -->
    <button
      class="btn btn-info mt-3"
      v-on:click="submitForm()"
      :disabled="isSubmitting">Search Twitter</button>
  </div>
</template>

<script>
import Axios from 'axios';
import to from 'await-to-js';

export default {
    name: 'PostForm',
    data() {
        return {
            post: {
                keyword: null,
            },
            isSubmitting: false,
        };
    },
    methods: {
        async submitForm() {
            this.isSubmitting = true;
            const url = `${this.url}/api/tweet`;
            const [newPostError, newPost] = await to(Axios.post(url, this.tweet));
            if (newPostError) {
                console.log(newPostError);
                return;
            }
            console.log(newPost);
            this.$router.push({ name: 'tweets' });
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
