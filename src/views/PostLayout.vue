<template>
<div id="posts">
    <div class="container">
        <div class="row">
            <div class="col-9">
                <h3>{{ title }}</h3>
                <router-view />
            </div>
            <div class="col-3">
                Calendar should go here
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
            title: 'My Happy Blog!!!',
        };
    },
};
</script>

<style lang="scss" scoped>
#posts {
    margin-top: 3rem;
    .col-9{
        border:1px solid $primary;
        box-shadow: 0 0 6px rgba($dark, .5);
    }
}
</style>
