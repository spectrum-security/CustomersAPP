<template >
  <div class="login">
    <section margin>
      <img src="../assets/logo SD.svg" alt="" height="170" width="170">
      <h1 class="title is-3">Spectrum</h1>
    </section>
    <section>
      <h1 class="title is-4" style="padding-top: 30%">LogIn</h1>
      <b-field>
        <b-input type="email" placeholder="Email" rounded></b-input>
      </b-field>
      <b-field>
        <b-input type="password" placeholder="Password" style="padding-top: 3%" rounded password-reveal></b-input>
      </b-field>
      <b-field style="padding-top: 15%">
        <b-button type="is-light" class="btnLogin"  rounded expanded>LogIn</b-button>
      </b-field>
      <b-field style="padding-top: 3%">
        <b-button type="is-light" class="btnSignup"  outlined rounded expanded>Criar conta</b-button>
      </b-field>
    </section>
  </div>
</template>



<style scoped>
.login {
  padding-top: 20%;
  padding-bottom: 20%;
  margin-left: 20%;
  margin-right: 20%;
  color: white;
  text-align: center;
}

.btnLogin {
  background-color: #2699FB;
  color: white
}

.btnSignup {
  color: white !important
}
</style>

