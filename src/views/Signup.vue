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
      <b-field label="Confirm Password" class="has-padding-top-5">
        <b-input type="password" password-reveal></b-input>
      </b-field>
      <b-field class="has-padding-top-30">
        <b-button type="is-light" class="btnSignin" expanded><b>SignIn</b></b-button>
      </b-field>
    </section>
  </div>
</template>

<style>
.login {
  margin-left: 10%;
  margin-right: 10%;
}

.logo {
  display: block;
  margin: auto;
}

.label {
  color: white !important;
}

.btnSignin {
  background-color: #f8640d !important;
  color: white !important;
}


</style>
