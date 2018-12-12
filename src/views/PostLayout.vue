<template>
  <div id="posts">
    <div class="container">
      <div class="row">
        <div class="col-7">
          <h3 class="title">{{ title }}</h3>
        </div>
        <div class="col navLinks">
          <div class="btn" id="twitter-blue">
            <router-link class="nav-link" to="/tweets/create-new-poetweet">Create Haiku
              <br>via Tweet
            </router-link>
          </div>
          <div class="btn" id="twitter-blue">
            <router-link class="nav-link" to="/posts/create-new-post">Create Haiku
              <br>via Form
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PostLayout',
    data() {
        return {
            title: 'Electric Poetry',
        };
    },
};
</script>

<style lang="scss" scoped>
.title {
    margin-left: 2%;
}
#posts {
    margin-top: 3rem;
}
.navLinks {
    margin-left: 11%;
}
#twitter-blue {
  color: #1ca1f1;
}
</style>
