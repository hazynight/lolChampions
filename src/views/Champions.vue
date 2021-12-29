<template>
  <div>
    <h2> All League of Lengend Champions </h2>
    <div id='cardsContainer'>
      <ChampionCard v-for="id in champions" :key="id" :id="id"/>
    </div>
  </div>
</template>

<script>
import ChampionCard from '@/components/ChampionCard.vue'
import { mapState } from 'vuex'


export default {
  components: {
    ChampionCard
  },
  created() {
    this.$store.dispatch('fetchChampions')
      .catch(() => {
        this.$router.push({ name: 'NetworkError'})
      })
  },
  computed: mapState([ 'champions' ])
};
</script>

<style>

#cardsContainer {
  width: auto;
  min-height: 500px;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

</style>
