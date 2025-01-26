import pokemonAPI from "@/api/pokemonAPI";

const getPokemons = () => {
    const pokemons = Array.from(Array(650));

    return pokemons.map((_, index) => index + 1)
};

const getPokemonNames = async(pokemons = []) => {
    try {
        const promises = pokemons.map((i) => pokemonAPI.get(`${i}`));
        const responses = await Promise.all(promises)

        return responses.map((pokemon) => {
            return {
                name: pokemon.data.name,
                id: pokemon.data.id
            }
        })
    } catch (error) {
        console.error(error)
    }
}

const getPokemonsOptions = async() => {
    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)

    const pokemons = await getPokemonNames(mixPokemons.slice(0, 4))
    return pokemons
}

export default getPokemonsOptions;
