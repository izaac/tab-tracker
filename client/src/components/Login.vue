<template lang="pug">
  v-layout(column)
    v-flex(xs6 offset-xs3)
      div(class="white elevation-2")
        v-toolbar(flat dense class="cyan" dark)
          v-toolbar-title Login
        div(class="pl-4 pr-4 pt-2 pb-2")
          v-text-field(v-model="email" label="Email" id="email")
          br
          v-text-field(v-model="password" label="Password" id="password" type="password")
          br
          div(class="error" v-html="error")
          br
          v-btn(class="cyan" @click="login" dark) Login
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red;
}
</style>
