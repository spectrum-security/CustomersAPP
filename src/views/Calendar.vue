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
        :limits="{ min: today, max: max }"
        :is-multiple-date-picker="datePicker"
        :key="datePicker"
        :marked-dates="markedDates"
        v-model="calendarData"
      ></FunctionalCalendar>
      <center>
        <b-button
          type="is-spectrum_blue"
          v-if="schedule == true && confirm == false"
          @click="pickDate"
          >Schedule Maintenance</b-button
        >
      </center>
      <center>
        <b-button
          type="is-spectrum_blue"
          v-if="schedule == false && confirm == true"
          @click="pickDate"
          >Confirm</b-button
        >
      </center>
      <!-- <div class="lineContainer noBar has-padding-top-20" v-if="markedDates.length > 0">
        <div class="card">
          <div class="card-content">
            <div v-for="(day, index) in datesPickedFinal" :key="index" class="has-padding-bottom-5">
              <span>Maintenence schedule: {{ day.date }}</span>
              <a class="delete marginButton" @click="deleteDate(index)"></a>
            </div>
          </div>
        </div>
      </div>-->

      <b-collapse
        class="card has-margin-top-20"
        aria-id="contentIdForA11y3"
        v-if="markedDates.length > 0"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <p class="card-header-title">Schedule</p>
          <a class="card-header-icon">
            <i
              class="fas fa-sort-down"
              :icon="props.open ? 'menu-down' : 'menu-up'"
              v-if="open == false"
            ></i>
            <!--  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon> -->
          </a>
        </div>
        <div class="card-content">
          <div class="content" v-for="(day, index) in markedDates" :key="index">
            <!-- <span v-if="day.date">Maintenence schedule: {{ day.date }}</span> -->
            <span>Maintenence schedule: {{ day }}</span>
            <a class="delete marginButton" @click="deleteDate(index)"></a>
          </div>
        </div>
      </b-collapse>
      <div style="height:100px; width:100%; clear:both;"></div>
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

.marginButton {
  margin-left: 15px;
  margin-top: 3px;
  background-color: #c20e0e;
}

.center {
  text-align: center !important;
}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import { FunctionalCalendar } from "vue-functional-calendar";
import moment from "moment";
import axios from "axios";

export default {
  name: "calendar",
  components: {
    navbar,
    FunctionalCalendar
  },
  data() {
    return {
      open: false,
      calendarData: {},
      datePicker: false,
      datesPicked: [],
      datesPickedFinal: [],
      markedDates: [],
      schedules: [],
      schedule: true,
      confirm: false,
      today: moment().format("D/M/YYYY"),
      max: moment()
        .add(6, "months")
        .format("D/M/YYYY")
    };
  },

  beforeCreate() {
    axios
      .get("http://localhost:3000/request/")
      .then(res => {
        this.schedules = res.data.content.requests;
        this.markedDates = this.schedules.map(a => a.date);

        console.log(this.markedDates);
      })

      .catch(error => {
        console.log(error);
      });
  },

  mounted() {},

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

      console.log(this.datesPickedFinal);
      for (let i = 0; i < this.datesPickedFinal.length; i++) {
        axios
          .post(
            "http://localhost:3000/request/" + this.$store.state.user.companyId,
            {
              date: this.datesPickedFinal[i].date
            }
          )
          .then(res => {
            console.log("entrou");
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    dateClick() {
      this.confirm = true;
      this.schedule = false;
    },

    deleteDate(index) {
      //console.log(index);

      console.log(this.schedules[index]._id);
      axios
        .delete("http://localhost:3000/request/" + this.schedules[index]._id)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
      this.datesPickedFinal.splice(index, 1);
      this.datesPicked.splice(index, 1);
      this.markedDates.splice(index, 1);
    }
  }
};
</script>
