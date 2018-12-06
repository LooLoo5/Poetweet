<template>
    <div id="post-title">
        <h4 class="border-bottom">{{ title }}</h4>
        <div class='text-right'>
                {{ createdAt }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostTitle',
    props: {
        title: String,
        createdAt: {
            type: String,
            default: 'today',
        },
    },
};
</script>


<style lang="scss" scoped>
h4 {
    padding: 10px;
}
</style>
