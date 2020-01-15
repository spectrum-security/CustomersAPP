<template>
  <div class="login">
    <section class="has-padding-top-75">
      <img
        src="../assets/logoLogin.svg"
        alt=""
        class="logo"
        height="170"
        width="170"
      />
    </section>
    <section class="has-padding-top-50">
      <b-field label="Email">
        <b-input type="email"></b-input>
      </b-field>
      <b-field label="Password" class="has-padding-top-5">
        <b-input type="password" password-reveal></b-input>
      </b-field>
      <b-field class="has-padding-top-30">
        <b-button type="is-spectrum_blue" class="btnLogin" expanded
          ><b>LogIn</b></b-button
        >
      </b-field>
      <!-- <b-field class="has-padding-top-5 has-padding-bot-75">
        <b-button type="is-spectrum_blue" class="btnSignup" outlined expanded
          ><b>SignUp</b></b-button
        >
      </b-field> -->
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
  color: rgba(0,0,0, 0.35) !important;
}

.btnLogin {
 
  color: white !important;
}

/* .btnSignup {
  color: white !important;
} */
</style>
