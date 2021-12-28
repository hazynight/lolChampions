<template>
    <div class='spellsContainer'>
        <Spell v-for='spell in spells' :spell='spell' :key='spell.name'/>
    </div>
</template>

<script>
import Spell from '@/components/Spell'

export default {
    components: {
        Spell
    },
    props: {
        spells: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

.spellsContainer {
    display: flex;
    flex-flow: column nowrap;
}

</style>

