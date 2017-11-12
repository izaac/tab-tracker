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
      songs: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
