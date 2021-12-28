<template>
    <div class='detailsContainer'>
        <img :src='loaddingImgURL'/>
        <div class='rightSide'>
            <div> Name:   {{ name }} </div> <br/>
            <div> Title:   {{ details.title }} </div> <br/>
            <div> Tags:   {{ details.tags.join(', ') }} </div> <br/>
            <div> Background:   {{ details.background }} </div> <br/>
            <div> Stats: 
                <br/>
                <br/>
                 HP: {{ details.stats.hp }} <br/>
                 MP: {{ details.stats.mp }} <br/>
                 Attack Damage: {{ details.stats.attackdamage}} <br/>
                 Armor: {{ details.stats.armor}} <br/>
                 Spell Block: {{ details.stats.spellblock}} <br/>
                 Attack Range: {{ details.stats.attackrange}} <br/>
                 Attack Speed: {{ details.stats.attackspeed}} 
            </div> <br/>
            <div> Spells: 
                <br/>
                <br/>
                <Spells :spells='details.spells'/>
            </div> <br/>
            <div> Passive:
                <br/>
                <br/>
                <Passive :passive='details.passive' />
            </div>
        </div>   
    </div>
</template>

<script>
import Spells from '@/components/Spells'
import Passive from '@/components/Passive'

export default {
    components: {
        Spells,
        Passive
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    created() {
        this.$store.dispatch('fetchChampionDetail', this.id)
    },
    computed: {
        details() {
            return this.$store.state.catchedChampions.filter( c => c.id === this.id)[0]
        },
        loaddingImgURL() {
            return 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
                    + this.id 
                    + '_0.jpg'
        },
        name() {
            const id_array = this.id.split('')
            const fixed_id_array = id_array.map( c => c === c.toUpperCase() ? ' ' + c : c)
            return fixed_id_array.join('')
        }
    }
}
</script>

<style scoped>

.detailsContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
}

img {
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px grey;
    width: 30vw;
    height: 55vw;
    max-width: 300px;
    max-height: 550px;
}

.rightSide {
    margin-top: 20px;
    margin-left: 20px;
    width: 40vw;
}


</style>