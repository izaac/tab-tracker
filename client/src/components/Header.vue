<template lang="pug">
    v-toolbar(fixed class="cyan" dark)
      v-toolbar-title(class="mr-4")
        span(class="home" @click="navigateTo({name: 'root'})") TabTracker
      v-toolbar-items
        v-btn(flat dark @click="navigateTo({name: 'Songs'})") Browse  
      v-spacer
      v-toolbar-items(v-if="!$store.state.isUserLoggedIn")
        v-btn(flat dark @click="navigateTo({name: 'Login'})") Login
      v-toolbar-items(v-if="!$store.state.isUserLoggedIn")
        v-btn(flat dark @click="navigateTo({name: 'Register'})") Sign Up
      v-toolbar-items(v-if="$store.state.isUserLoggedIn")
        v-btn(flat dark @click="logout") Log Out
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'root',
      });
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
