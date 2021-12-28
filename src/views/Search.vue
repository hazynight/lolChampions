<template>
    <div>
        <div class='search'>
            <div id='searchTitle'> Search an Champion </div>
            <input type='text' v-model="query" />
        </div>
        <div id='cardsContainer'>
            <h3 v-show="showNotFound">Oops, {{ query }} does not exist...</h3>
            <ChampionCard v-for="id in matchedChampions" :key="id" :id="id"/>
        </div>
    </div>
</template>

<script>
import ChampionCard from '@/components/ChampionCard.vue'

export default {
    components: {
        ChampionCard
    },
    data() {
        return {
            query: ''
        }
    },
    created() {
        this.$store.dispatch('fetchChampions')
        .catch(error => {
            console.log(error)
        })
    },
    computed: {
        matchedChampions() {
            if ( this.query === '' )
                return []
            return this.$store.state.champions.filter( c => c.toLowerCase().includes(this.query.toLowerCase()))
        },
        showNotFound() {
            if ( this.query !== '' && this.matchedChampions.length === 0)
                return true
            return false
        }
    }
}
</script>

<style scoped>

.search {
    text-align: center;
    margin-top: 20px;
}

#searchTitle {
    margin-bottom: 20px;
    font-size: 20px;
}

input {
    height: 40px;
    width: 50%;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    text-align: center;
    border: solid 2px rgb(134, 134, 134);
    font-size: 16px;
}

</style>