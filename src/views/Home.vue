<template>
  <div class="container">
    <img class="ml-3 mt-5" alt="Poetweet Logo" src="../assets/quillInk.png">
    <Home class="ml-3" msg="Create poetry using a Tweet"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';

export default {
    name: 'home',
    components: {
        Home,
    },
};
</script>
