import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/11.24.1'
})

export default {
    getAllChampions() {
        return apiClient
            .get('data/en_US/champion.json')
    },
    getChampionDetail( id ) {
        return apiClient
            .get('data/en_US/champion/' + id + '.json')
    }
}