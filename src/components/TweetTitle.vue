<template>
    <div class="container" id="tweet-title">
        <div class="row">
            <div class="col-12">
                <h4 class="border-bottom"> {{ title }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TweetTitle',
    props: {
        title: String,
    },
};
</script>


<style lang="scss" scoped>
.tweet-title {
    width: 85%;
    height: 320px;
}
h4 {
    padding: 10px;
}
</style>
