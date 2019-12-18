<template >
  <div class="login">
    <section>
      <img src="../assets/logoLogin.svg" alt="" class="logo" height="170" width="170">
    </section>
    <section style="padding-top: 20%">

      <b-field label="Email">
        <b-input type="email"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input type="password" password-reveal></b-input>
      </b-field>
      <b-field style="padding-top: 20%">
        <b-button type="is-light" class="btnLogin" expanded><b>LogIn</b></b-button>
      </b-field>
      <b-field style="padding-top: 3%">
        <b-button type="is-light" class="btnSignup"  outlined  expanded><b>SignUp</b></b-button>
      </b-field>
    </section>
  </div>
</template>



<style>
.login {
  padding-top: 20%;
  padding-bottom: 20%;
  margin-left: 10%;
  margin-right: 10%;
  
  
}

.logo{
  display: block;
  margin: auto
}

.label{
  color: white !important;
  
}

.btnLogin {
  background-color: #F8640D !important;
  color: white !important
}

.btnSignup {
  color: white !important
}   


</style>

