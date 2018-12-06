<template>
  <div class="container">
    <img class="ml-3 mt-5" alt="Poetweet Logo" src="../assets/quillInk.png">
    <HelloWorld class="ml-3" msg="Create poetry using a Tweet"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld,
    },
};
</script>
