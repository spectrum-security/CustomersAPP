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
  color: white
}

.subtitle {
  color: white
}

.box {
  height: 200px;
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
