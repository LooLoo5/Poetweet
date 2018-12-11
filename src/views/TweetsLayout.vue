<template>
<div id="posts">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>{{ title }}</h3>
                <router-view />
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
            title: 'Electric Poetry',
        };
    },
};
</script>

<style lang="scss" scoped>
#posts {
    margin-top: 3rem;
}
</style>
