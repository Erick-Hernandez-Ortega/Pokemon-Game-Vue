<template>
    <div class="pokemon-container">
        <img class="hidden-pokemon"
            :src="imgSrc"
            alt="pokemon" />
        <img class="fade-in"
            v-if="showPokemon"
            :src="imgSrc"
            alt="pokemon" />
    </div>
</template>

<script>
export default {
    name: 'PokemonPicture',
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        imgSrc () {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-content: center;
}

img {
    height: 200px;
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);
}

</style>