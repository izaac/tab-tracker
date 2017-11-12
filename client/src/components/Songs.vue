<template lang="pug">
  v-layout(column)
    v-flex(xs6 offset-xs3)
      panel(title="Songs")
</template>

<script>
import Panel from '@/components/Panel';

export default {
  components: {
    Panel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
