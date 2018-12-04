<template>
    <div class="post-body">
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
}
</style>
