<template>
  <div class="container">
    <h1 class="mt-2" id="title"> <i>Create poetry using</i> <b> Poetweet</b></h1>
    <h3>
      <b>Haiku</b> noun
    </h3>
    <p>hai • ku | \ˈhī-(ˌ)kü
      <br>plural haiku
      <br>
    </p>A
    <b>haiku</b> is an unrhymed Japanese poetic form that consists of 17 syllables
    arranged in three lines containing five, seven, and five syllables, respectively.
    <p class="mt-3">Poetweet allows you to transform 140 characters or less into a haiku.
      <br>
      <!-- <br>A "Haiku" is a traditional form of Japanese poetry. Haiku poems consist of 3 lines,
        where the first
        <br>and last lines have 5 syllables and the middle line has 7 syllables. The lines rarely
      rhyme.-->
      <!-- <br>
      <br>-->
    </p>
    <div class="container">
      <div class="row">
        <div class="col-3 text-left pl-0">
          <router-link to="/tweets/create-new-poetweet" class="btn" id="twitter-white">
            <i>Create a haiku
              <br>from a
              <b>tweet</b>
            </i>
          </router-link>
        </div>
        <div class="col-3 text-left pl-0">
          <router-link to="/posts/create-new-post" class="btn" id="twitter-white">
            <i>Create a haiku
              <br>from
              <b>scratch</b>
            </i>
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

#twitter-white {
    color: white;
}
</style>
