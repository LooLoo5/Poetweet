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
    name: 'PostLayout',
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
    // width: 85%;
    // height: 320px;
}
</style>
