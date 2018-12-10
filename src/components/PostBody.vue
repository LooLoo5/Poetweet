<template>
    <div class="container ml-3 post-body">
        <slot v-html="content"></slot>
    </div>
</template>

<script>
export default {
    name: 'postBody',
};
</script>

<style lang="scss" scoped>
.post-body {
    padding: 10px;
    width: 85%;
}
</style>
