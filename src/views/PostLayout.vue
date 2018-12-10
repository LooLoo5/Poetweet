<template>
<div id="posts">
    <div class="container">
        <div class="row">
            <div class="col-9">
                <h3>{{ title }}</h3>
                <router-view />
            </div>
            <div class="col-3">
                <b>Go ahead, read it outloud!</b>
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
    width: 50%;
    height: 320px;
}
</style>
