<template>
  <div class="sensors">
    <navbar/>
    <div class="margin">
      <div class="has-padding-top-30 has-padding-bottom-50 center">
        <h3 class="title is-4">Sensors</h3>
      </div>

<div class="card">
  <div class="card-content">
      <div class="content">
        <p class="title is-4">Motion Sensor Floor 1</p>
      </div>
    <div class="content">
      <p><strong>Status:</strong> <strong class="active">Active</strong></p>
      <strong>Last Maintenance:</strong>
      <p><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></p>
      <p><button class="button is-rounded is-link">Show Activity</button></p>
      <button class="button is-rounded is-link">Schedule Maintenance</button>
    </div>
  </div>
</div>

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

.active{
  color: green;
}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  name: "sensors",
  components: {
    navbar
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>
