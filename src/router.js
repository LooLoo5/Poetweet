import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PostLayout from './views/PostLayout.vue';
import Post from './views/Post.vue';
import PostForm from './views/PostForm.vue';
import About from './views/About.vue';
import TweetsLayout from './views/TweetsLayout.vue';
import Tweet from './views/Tweet.vue';
import TweetForm from './views/TweetForm.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/tweets',
            component: TweetsLayout,
            children: [{
                path: '',
                name: 'tweets',
                component: Tweet,
            }, {
                path: 'create-new-tweetPoem',
                name: 'newTweet',
                component: TweetForm,
            }],
        },
        {
            path: '/posts',
            component: PostLayout,
            children: [{
                path: '',
                name: 'posts',
                component: Post,
            }, {
                path: 'create-new-post',
                name: 'newPost',
                component: PostForm,
            }],
        },
    ],
});
