<template lang="pug">
  v-layout(column)
    v-flex(xs6 offset-xs3)
      panel(title="Songs")
        div(v-for="song in songs" :key="song.title").
          {{song.title}} - 
          {{song.artist}} - 
          {{song.album}}
</template>

<script>
import Panel from '@/components/Panel';

export default {
  components: {
    Panel,
  },
  data() {
    return {
      songs: [
        {
          title: 'Float On',
          artist: 'Modest Mouse',
          album: 'Good News for People who Loves Bad News',
        },
        {
          title: 'Float On',
          artist: 'Modest Mouse',
          album: 'Good News for People who Loves Bad News',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
