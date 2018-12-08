<template>
    <div class="container" id="post-title">
        <div class="row">
            <div class="col-11">
                <h4 class="border-bottom"> {{ title }}</h4>
            </div>
            <div class="col-1">
                <div class='text-center'>
                        {{ createdAt }}
                </div>
            </div>
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
