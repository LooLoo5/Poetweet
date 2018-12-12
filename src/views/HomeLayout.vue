<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <img class="ml-3 mt-4" alt="Poetweet Logo" src="../assets/quillInk.png">
        <Home class="ml-3" msg=""/>
      </div>
      <div class="col-4 pl-0 pr-0">
        <Typejs/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';
import Typejs from '@/components/Typejs.vue';

export default {
    name: 'home',
    components: {
        Home,
        Typejs,
    },
};
</script>
