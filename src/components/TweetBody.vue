<template>
    <div class="container ml-3 tweet-body">
        <slot v-html="content"></slot>
    </div>
</template>

<script>
export default {
    name: 'tweetBody',
};
</script>

<style lang="scss" scoped>
.tweet-body {
    padding: 10px;
}
</style>
