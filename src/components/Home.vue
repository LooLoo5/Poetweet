<template>
  <div class="hello">
    <h1 class="mt-2">{{ msg }}</h1>
    <h3>
      <b>Haiku</b> noun
    </h3>
    <p>hai ku | \ˈhī-(ˌ)kü
      <br>plural haiku
      <br>
    </p>
    <h1 class="mt-3">{{ msg }}</h1>
    <h2><b>Haiku</b> noun<br>hai ku | \ˈhī-(ˌ)kü<br>plural haiku<br></h2>
    <p class="mt-3">
      Poetweet allows you to transfrom 140 characters or less into a haiku.
      <br>
      <br>A "Haiku" is a traditional form of Japanese poetry. Haiku poems consist of 3 lines,
      where the first
      <br>and last lines have 5 syllables and the middle line has 7 syllables. The lines rarely
      rhyme.
      <br>
      <br>
    </p>
    <div class="container">
      <div class="row">
        <div class="col-2 text-center">
          <router-link to="/tweets/create-new-poetweet">Create a haiku
            <br>from a tweet
          </router-link>
        </div>
        <div class="col-2 text-center">
          <router-link to="/posts/create-new-post">Create a haiku
            <br>from scratch
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 20px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #4ab3f4;
}
</style>
