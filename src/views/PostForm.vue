<template>
  <div class="container" id="postForm">
    <p>
      <b>1</b> | Type out a fun story, under 140 characters.
    </p>
    <p>
      <b>2</b> | Consider a thoughtful title.
    </p>
    <div class="form-row mt-5">
      <label for="title">
        <b>Type in a Story</b>
      </label>
      <textarea
        name="body"
        v-model="post.body"
        class="form-control"
        placeholder="any story under 140 characters"
        maxlength="140"
      />
    </div>
    <div class="form-row mt-2">
      <label for="title">
        <b>Haiku's Title</b>
      </label>
      <input
        type="text"
        name="title"
        class="form-control"
        placeholder="stay creative"
        v-model="post.title"
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
    name: 'PostForm',
    data() {
        return {
            post: {
                title: null,
                body: null,
            },
            isSubmitting: false,
        };
    },
    methods: {
        async submitForm() {
            this.isSubmitting = true;
            const url = `${this.url}/api/post`;
            const [newPostError, newPost] = await to(
                Axios.post(url, this.post),
            );
            if (newPostError) {
                console.log(newPostError);
                return;
            }
            console.log(newPost);
            setTimeout(() => {
                this.$router.push({ name: 'posts' });
            }, 1000);
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
    color: black;
    font-weight: bold;
}
</style>
