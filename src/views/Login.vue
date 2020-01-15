<template>
  <div class="login">
    <section class="has-padding-top-75">
      <img src="../assets/logoLogin.svg" alt class="logo" height="170" width="170" />
    </section>
    <section class="has-padding-top-50">
      <b-field label="Email">
        <b-input type="email" v-model="email"></b-input>
      </b-field>
      <b-field label="Password" class="has-padding-top-5">
        <b-input type="password" password-reveal v-model="password"></b-input>
      </b-field>
      <b-field class="has-padding-top-30">
        <b-button
          type="is-spectrum_blue"
          class="btnLogin"
          :loading="loading"
          @click="login"
          expanded
        >
          <b>LogIn</b>
        </b-button>
      </b-field>
      <!-- <b-field class="has-padding-top-5 has-padding-bot-75">
        <b-button type="is-spectrum_blue" class="btnSignup" outlined expanded
          ><b>SignUp</b></b-button
        >
      </b-field>-->
    </section>
  </div>
</template>

<style scoped>
.login {
  margin-left: 10%;
  margin-right: 10%;
}

.logo {
  display: block;
  margin: auto;
}

.label {
  color: rgba(0, 0, 0, 0.35) !important;
}

.btnLogin {
  color: white !important;
}

/* .btnSignup {
  color: white !important;
} */
</style>

<script>
import axios from "axios"
export default {
  data() {
    return {
      email: "",
      password: "",
      resError: null,
      loading: false
    };
  },

  created() {},

  methods: {
    async login() {
      this.resError = "";
      this.loading = true;

      await axios
        .post("/auth/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.$store.dispatch("setToken", res.data.content.jwt);
          this.$store.dispatch("setLoggedUser", res.data.content.user);
          this.$store.dispatch("setIsAuthenticated", true);
          this.loading = false;
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          this.resError = err.response.data.message.en;
          this.loading = false;
        });

      this.loading = false;
    }
  },
  computed: {}
};
</script>
