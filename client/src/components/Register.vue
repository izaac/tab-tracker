<template lang="pug">
  v-layout(column)
    v-flex(xs6 offset-xs3)
      panel(title="Register")
        form(name="tab-tracker-form-register" autocomplete="off")
          v-text-field(v-model="email" label="Email" id="email")
          br
          v-text-field(v-model="password" label="Password" id="password" type="password" autocomplete="new-password")
          br
          div(class="error" v-html="error")
          br
          v-btn(class="cyan" @click="register" dark) Register
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  components: {
    Panel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red;
}
</style>
