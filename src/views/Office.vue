<template>
  <div class="office">
    <navbar />
    <div class="has-padding-top-30 has-padding-bottom-50 center officeTitle">
      <h3 class="title is-4">{{ office.location }}</h3>
    </div>
    <div class="months">
      <section>
        <b-field label="Select a date">
          <b-datepicker
            :show-week-number="showWeekNumber"
            placeholder="Click to select..."
            icon="calendar-today"
            v-model="date"
            @input="filter"
          >
          </b-datepicker>
        </b-field>
      </section>
    </div>
    <div class="margin lineContainer noBar">
      <div class="timeline">
        <div class="container left" v-for="log in hourLogs" :key="log">
          <div class="content">
            <h2>{{ log }}</h2>
            <p v-if="office.sensorType == 1">Motion</p>
          </div>
        </div>
        <div style="height:50px; width:100%; clear:both;"></div>
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
  color: white;
}

.subtitle {
  color: white;
}

.box {
  height: 50px;
}
* {
  box-sizing: border-box;
}
.lineContainer {
  height: 500px;
  overflow-x: hidden;
  overflow-x: auto;
  text-align: justify;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #1374f2;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #1374f2;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}

div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}
.months {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
}

.button {
  color: #3587f2;
  border-color: #3587f2;
  margin-left: 2%;
}
div.scrollmenu a {
  display: inline-block;
  color: #3587f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: #777;
}

.officeTitle {
  background-image: linear-gradient(to right, #66b1f2, #1374f2);
}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import axios from "axios";
import moment from "moment";

export default {
  name: "office",
  components: {
    navbar
  },

  data: function() {
    return {
      office: {},
      hourLogs: [],
      showWeekNumber: false,
      date: new Date()
    };
  },

  methods: {
    filter() {
      this.hourLogs = [];
      for (let i = 0; i < this.office.logs.length; i++) {
        console.log(moment(this.office.logs[i]).format("l"))
        if(moment(this.office.logs[i]).format("l") == moment(this.date).format("l"))
        this.hourLogs.push(this.office.logs[i].slice(11, 16));
      }

      console.log(moment(this.date).format("l"));
    }
  },

  created() {
    axios
      .get("http://localhost:3000/sensors/" + this.$route.params.sensorId)
      .then(res => {
        this.office = res.data.sensor;
        console.log(this.office);
      })
      .catch(err => {
        throw err;
      });

      this.filter()
  }
};
</script>
