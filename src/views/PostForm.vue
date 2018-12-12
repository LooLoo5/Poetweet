<template>
  <div class="container" id="postForm">
    <p>
      <b>1</b> | Consider a thoughtful title.
    </p>
    <p>
      <b>2</b> | Type out a fun story, under 140 characters.
    </p>
    <div class="form-row mt-5">
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
    <div class="form-row mt-2">
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
