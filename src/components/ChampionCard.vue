<template>
    <router-link :to='{ name: "Details", params: { id: id }}'>
        <div class='card'> 
            <img :src='imageURL' alt='champion icon' />
            <div> {{ name }} </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        imageURL() {
            return 'https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/'
                +   this.id 
                + '.png'
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

.card {
    margin: 10px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px black;
}

.card:hover {
    transform: scale(1.1)
}

</style>
