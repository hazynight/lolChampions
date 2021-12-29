import { createStore } from "vuex"
import Service from '@/axios/Service.js'

export default createStore({
  state: {
    champions: [],
    catchedChampions:[],
    currentChampion: null
  },
  mutations: {
    SET_CHAMPIONS(state, champions) {
      state.champions = champions
    },
    SET_CURRENTCHAMPION(state, id) {
      state.id = id
    },
    ADD_CATCHEDCHAMPIONS(state, championDetail) {
      const details = {
        id: championDetail.id,
        title: championDetail.title,
        tags: championDetail.tags,
        background: championDetail.lore,
        info: championDetail.info,
        stats: championDetail.stats,
        spells: championDetail.spells.map( s => {
          return {
            name: s.name,
            image: s.image.full,
            description: s.description
          }
        }),
        passive: {
          description: championDetail.passive.description,
          image: championDetail.passive.image.full
        }

      }
      state.catchedChampions.push(details)
    }
  },
  actions: {
    fetchChampions({ commit, state }) {
      if (state.champions.length === 0) {
        return Service.getAllChampions()
          .then(response => {
            const champions = Object.values(response.data.data)
                                .map( c => c.id)
            commit('SET_CHAMPIONS', champions)
          })
          .catch( error => {
            throw(error)
          })  
      }
    },
    fetchChampionDetail({ commit, state }, id) {
      commit('SET_CURRENTCHAMPION', id)
      const current_champion = state.catchedChampions.filter( c => c.id === id)
      if (current_champion.length === 0) {
        return Service.getChampionDetail( id )
          .then(response => {
            commit('ADD_CATCHEDCHAMPIONS', response.data.data[id])
          })
          .catch( error => {
            throw(error)
          })
      }
    }
  },
  modules: {},
});
