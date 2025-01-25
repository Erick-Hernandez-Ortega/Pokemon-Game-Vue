<template>
  <div>
    <h1>¿Quien es este pokemon?</h1>

    <PokemonPicture :pokemon-id="5" />
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
export default {
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
    }
}
</script>
