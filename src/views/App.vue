<template>
    <div id="app">
        <div id="nav">
            <header>
                <nav class="navbar navbar-dark bg-dark text-light">
                    <h1>Logo</h1>
                    <p>Some fancy navigation</p>
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link> |
                    <router-link :to="{ name: 'posts' }">Posts</router-link>
                </nav>
            </header>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">

</style>
