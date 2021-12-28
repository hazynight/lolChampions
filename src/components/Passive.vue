<template>
    <div class='passive'>
        <img :src='passiveURL' alt='passive'/>
        <div class='descriptions' v-html='passive.description' /> 
    </div>
</template>

<script>
export default {
    props: {
        passive: {
            type: Object,
            required: true
        }
    },
    computed: {
        passiveURL() {
            return 'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/passive/'
                    + this.passive.image
        }
    }
}
</script>

<style scoped>

.passive {
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px red;
    display: flex;
    flex-flow: row nowrap;
}

img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

</style>