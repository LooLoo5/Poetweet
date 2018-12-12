<template>
  <div id="app">
    <div class="container" id="nav">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" id="twitter-blue">Poetweet</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link" id="twitter-blue" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" id="twitter-blue" to="/about">
                About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" id="twitter-blue" :to="{ name: 'tweets' }">
                    Haikus via Tweets</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" id="twitter-blue" :to="{ name: 'posts' }">
                    Haikus via Form</router-link>
              </li>
            </ul>
            <span class="navbar-text pt-2" id="twitter-blue">
              <i>electrical words</i>
            </span>
          </div>
        </nav>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#twitter-blue {
    color: #1ca1f1;
}

body {
  opacity: 0;
}
</style>
