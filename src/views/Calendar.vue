<template>
  <div class="calendar">
    <navbar />
    <div class="margin">
      <div class="has-padding-top-30 has-padding-bottom-50 center">
        <h3 class="title is-4">Calendar</h3>
      </div>
      <FunctionalCalendar
      class="has-padding-bottom-20"
        @choseDay="dateClick"
        :is-multiple-date-picker="datePicker"
        :key="datePicker"
        :marked-dates="markedDates"
        v-model="calendarData"
      ></FunctionalCalendar>
      <center><b-button
        type="is-spectrum_blue"
        v-if="schedule == true && confirm == false"
        @click="pickDate"
        >Schedule Maintenance
      </b-button></center>
      <center><b-button
        type="is-spectrum_blue"
        v-if="schedule == false && confirm == true"
        @click="pickDate"
        >Confirm
      </b-button></center>
      <!-- <b-button
        type="is-spectrum_blue"

        >Unschedule Maintenance
      </b-button> -->
      <div class="lineContainer noBar has-padding-top-20" v-if="markedDates.length > 0">
<div class="card">
  <div class="card-content">
      <p v-for="(day, index) in datesPickedFinal" :key="index">
        Maintenence schedule day {{ day.date }}
      </p>
  </div>
</div>
      </div>
      <b-button type="is-spectrum_blue" class="plusButton">
        <i class="fas fa-plus"></i>
      </b-button>
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

.plusButton {
  position: fixed;
  right: 10px;
  bottom: 74px;
  z-index: 20;
  border-radius: 80px;
}

.lineContainer {
  height: 500px;
  overflow-x: hidden;
  overflow-x: auto;
  text-align: justify;
}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import { FunctionalCalendar } from "vue-functional-calendar";

export default {
  name: "calendar",
  components: {
    navbar,
    FunctionalCalendar
  },
  data() {
    return {
      calendarData: {},
      datePicker: false,
      datesPicked: [],
      datesPickedFinal: [],
      markedDates: [],
      schedule: true,
      confirm: false,
      days: [],
      cont: 0,
      flag: true,
      today: "16/1/2020"
    };
  },

  created() {
    //console.log(this.calendarData);
  },

  methods: {
    pickDate() {
      if (this.datePicker == false) this.datePicker = true;
      else this.datePicker = false;

      if (this.datePicker == false) {
        this.datesPicked = this.calendarData.selectedDates;
        for (let i = 0; i < this.datesPicked.length; i++) {
          this.datesPickedFinal.push(this.datesPicked[i]);
          this.markedDates.push(this.datesPicked[i].date);
        }
      }
      this.confirm = false;
      this.schedule = true;
    },

    dateClick() {
      this.confirm = true;
      this.schedule = false;
    },

    confirmFunc() {}
  }
};
</script>
