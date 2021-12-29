<template>
    <h1> Oops! </h1>
    <h1> The {{ resource }} you're looking for is not here. </h1>
    <router-link :to='{ name: "Champions" }'><h1>Back to the home page</h1></router-link>
</template>

<script>
export default {
    props: {
        resource: {
            type: String,
            required: true,
            default: 'page'
        }
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
}

</style>