<template>
    <div id="app">
        <div class="container" id="nav">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
                    <a class="navbar-brand text-info">Poetweet</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link text-info" to="/">Home<span class="sr-only">
                                (current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-info" to="/about">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-info" :to="{ name: 'newTweet' }">From Tweets
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-info" :to="{ name: 'tweets' }">Tweets List
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-info" :to="{ name: 'newPost' }">From Scratch
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-info" :to="{ name: 'posts' }">Scratch List
                            </router-link>
                        </li>
                        </ul>
                        <span class="navbar-text text-info">
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
a {
    color: #4AB3F4;
}

</style>
