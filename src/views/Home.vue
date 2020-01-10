<template>
  <div class="home">
    <navbar/>
    <div class="margin">
      <div class="has-padding-top-30 has-padding-bottom-50 center">
        <h3 class="title is-4">Security Status</h3>
      </div>
      <h5 class="subtitle is-5">Report</h5>
      <div class="box">
        <p>ola</p>
      </div>
      <h5 class="subtitle is-5 has-padding-top-30">Offices</h5>
    </div>
    <div class="scrollmenu noBar">
   <img class="scrollimg" src="../assets/office.png"/>
   <img src="../assets/office.png"/>
</div>
  </div>
</template>

<style scoped>
.margin {
  margin-left: 10%;
  margin-right: 10%;
}

.center {
  text-align: center;
}

.title {
  color: black
}

.subtitle {
  color: black
}

.box {
  height: 200px;
}

div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu img {
  display: inline-block;
  color: white;
  text-align: center;
  padding-left: 30px;
  padding-right: 20px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: #777;
}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  name: "home",
  components: {
    navbar
  }
};
</script>
