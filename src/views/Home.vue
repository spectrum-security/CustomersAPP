<template>
  <div class="home">
    <navbar />
    <div class="margin">
      <div class="has-padding-top-30 has-padding-bottom-40 center">
        <h3 class="title is-4">Security Status</h3>
      </div>
      <h5 class="subtitle is-5">Report</h5>
      <div class="box">
        <p>Number of security breaches: {{reports}}</p>
      </div>
      <h5 class="subtitle is-5 has-padding-top-20">Offices</h5>
    </div>
    <div class="scrollmenu noBar">
      <router-link :to="{ name: 'office', params: { sensorId: office._id } }"  v-for="office in offices" :key="office._id">
        <button><span class="color">{{ office.location }}</span></button>
        </router-link>
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
  color: black;
}

.subtitle {
  color: black;
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

button {
  padding-top: 70px;
  padding-bottom: 100px;
  padding-right: 120px;
  padding-left: 80px;
  background: url("../assets/office.png");
  background-repeat: no-repeat;
  border: none;
}

.color {
  background-color: white;
  padding: 5px;
  font-weight: bold;

}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    navbar
  },
  data: function() {
    return {
      offices: [],
      reports: 0
    };
  },

  created() {
    axios
      .get(
        "https://api-spectrum.herokuapp.com/sensors/company_sensors/" +
          this.$store.state.user.companyId
      )
      .then(res => {
        this.offices = res.data.content.sensors;
      })
      .catch(err => {
        throw err;
      });

    axios
      .get("https://api-spectrum.herokuapp.com/logs/last_7_days", {
        params: {
          companyId: this.$store.state.user.companyId
        }
      })
      .then(res => {
        this.reports = res.data.totalRecords
      })
      .catch(err => {
        throw err;
      });
  }
};
</script>
