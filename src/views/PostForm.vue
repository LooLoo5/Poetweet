<template>
    <div class="container" id="postForm">
        <div class="form-row">
            <label for="title">Title</label>
            <input
                type="text"
                name="title"
                class="form-control"
                v-model="post.title" />
        </div>
        <div class="form-row">
            <label for="title">Body</label>
            <textarea
                name="body"
                v-model="post.body"
                class="form-control" />
        </div>
        <button
            class="btn btn-primary mt-3"
            v-on:click="submitForm()"
            :disabled="isSubmitting">Create new post</button>
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
            const [newPostError, newPost] = await to(Axios.post(url, this.post));
            if (newPostError) {
                console.log(newPostError);
                return;
            }
            console.log(newPost);
            this.$router.push({ name: 'posts' });
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
#postForm {
    // margin-bottom: 14px;
}
</style>
