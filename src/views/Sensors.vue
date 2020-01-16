<template>
  <div class="sensors">
    <navbar />
    <div class="margin">
      <div class="has-padding-top-30 has-padding-bottom-50 center">
        <h3 class="title is-4">Sensors</h3>
      </div>

      <div
        class="has-padding-bottom-30"
        v-for="sensor in sensors"
        :key="sensor._id"
      >
        <div class="card">
          <div class="card-content">
            <div class="content">
              <p class="title is-4" v-if="(sensor.sensorType = 1)">
                Motion Sensor {{ sensor.location }}
              </p>
            </div>
            <div class="content">
              <p v-if="(sensor.active = true)">
                <strong>Status:</strong> <strong class="active">Active</strong>
              </p>
              <p v-if="(sensor.active = false)">
                <strong>Status:</strong>
                <strong class="inactive">Inactive</strong>
              </p>
              <strong>Last Maintenance:</strong>
              <p><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></p>
              <p>
                <button class="button is-rounded is-spectrum_blue">
                  Show Activity
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style="height:50px; width:100%; clear:both;"></div>
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

.active {
  color: green;
}
.inactive {
  color: red;
}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import axios from "axios";

export default {
  name: "sensors",
  components: {
    navbar
  },
  data: function() {
    return {
      sensors: []
    };
  },
  methods: {
    getSensors() {
      axios
        .get(
          "http://localhost:3000/sensors/company_sensors/" + this.$store.state.user.companyId
        )
        .then(res => {
          this.sensors = res.data.content.sensors;
          console.log(this.sensors);
        })
        .catch(err => {
          throw err;
        });
    }
  },

  created() {
    this.getSensors();
  }
};
</script>
