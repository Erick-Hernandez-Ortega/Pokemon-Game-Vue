<template>
    <div class="container">
        <div class="loader" v-if="!pokemonSelected"></div>

        <div v-else>
            <h1>¿Quien es este pokemon?</h1>

            <PokemonPicture :pokemon-id="pokemonSelected?.id" :show-pokemon="showPokemon" />
            <PokemonOptions :options="pokemons" @selection="checkAnswer" />

            <div v-if="showAnswer" class="fade-in">
                <h2>{{ message }}</h2>
                <button class="button-85" type="button" @click="newGame">Nuevo juego</button>
            </div>
        </div>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonsOptions from '@/helpers/getPokemonOptions';

export default {
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
    },
    data() {
        return {
            pokemons: [],
            pokemonSelected: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async getOptions() {
            this.pokemons = await getPokemonsOptions();

            const randomNumber = Math.floor(Math.random() * 4)
            this.pokemonSelected = this.pokemons[randomNumber]
        },
        checkAnswer(id) {
            this.showPokemon = true

            if (this.pokemonSelected.id === id) {
                this.message = `Correcto, es ${this.pokemonSelected.name}`
            } else {
                this.message = `Incorrecto, era ${this.pokemonSelected.name}`
            }
            this.showAnswer = true
        },
        newGame () {
            this.getOptions()
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonSelected = null
        }
    },
    mounted() {
        this.getOptions()
    }
}
</script>
