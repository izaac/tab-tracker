<template lang="pug">
    v-toolbar(fixed class="cyan" dark)
      v-toolbar-title(class="mr-4") 
        span(class="home" @click="navigateTo({name: 'root'})") TabTracker
      //- TODO: Implement this later
      //- v-toolbar-items
      //-   v-btn(flat dark) Browse
      v-spacer
      v-toolbar-items
        v-btn(flat dark @click="navigateTo({name: 'Register'})") Sign Up
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red;
}

.home {
  cursor: pointer;
}

.home:hover {
  color: #e9e;
}
</style>