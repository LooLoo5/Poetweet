<template>
<div id="posts">
    <div class="container">
        <div class="row">
            <div class="col-9">
                <h3>{{ title }}</h3>
                <router-view />
            </div>
            <div class="col-3">
                Convert a Tweet into a Haiku
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'TweetsLayout',
    data() {
        return {
            title: 'Find a Tweet',
        };
    },
};
</script>

<style lang="scss" scoped>
#posts {
    margin-top: 3rem;
}
</style>
