<template>
    <div class='spell'>
        <img :src='spellURL' alt='spell'/>
        <div class='descriptions'> 
            Name: {{spell.name}} <br/>
            <div v-html='spell.description'/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        spell: {
            type: Object,
            required: true
        }
    },
    computed: {
        spellURL() {
            return 'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/'
                    + this.spell.image
        }
    }
}
</script>

<style scoped>

.spell {
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px black;
    display: flex;
    flex-flow: row nowrap;
}

img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}


</style>