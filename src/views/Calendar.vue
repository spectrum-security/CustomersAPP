<template>
  <div class="calendar">
    <navbar/>
    <div class="margin">
      <div class="has-padding-top-30 has-padding-bottom-50 center">
        <h3 class="title is-4">Calendar</h3>
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
  color: black
}

.subtitle {
  color: black
}

</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  name: "calendar",
  components: {
    navbar
  }
};
</script>
