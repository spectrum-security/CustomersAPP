<template>
  <div class="password">
    <navbar />
    <div class="margin">
      <div class="has-padding-top-30 has-padding-bottom-50 center">
        <h3 class="title is-4">New Password</h3>
      </div>

      <div class="has-padding-top-20 center">
        <h5 class="subtitle is-4">Password</h5>
        <input
          class="input is-rounded"
          type="password"
          name="pass"
          v-model="password"
        />
      </div>

      <div class="has-padding-top-30 center">
        <h5 class="subtitle is-4">Confirm Password</h5>
        <input
          class="input is-rounded"
          type="password"
          v-model="confirm"
        />
      </div>
      <div v-if="notsame"><center><p class="red">The passwords are not the same</p></center></div>
      <div class="has-padding-top-30 center">
        <button class="button is-spectrum_blue is-rounded" @click="saveProfile">
          Save
        </button>
      <div v-if="changed"><center><p class="green">The Password has been changed </p></center></div>
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

.postion {
  color: rgba(0, 0, 0, 0.35);
}

.red {
  color: red;
}
.green {
  color: green;
}
</style>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import axios from "axios";
import bcrypt from "bcryptjs";

export default {
  name: "password",
  components: {
    navbar
  },

  data: function() {
    return {
      password: "",
      confirm: "",
      notsame: false,
      changed: false
    };
  },

  methods: {
    saveProfile() {
      if (this.password == this.confirm) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(this.password, salt);
        axios
          .put("https://api-spectrum.herokuapp.com/users/" + this.$store.state.user._id, {
            password: hash
          })
          .then(res => {
            console.log(res);
            this.changed = true
            this.notsame = false
          })
          .catch(err => {
            throw err;
          });
      } else {
        this.notsame = true;
      }
    }
  },

  created() {
    console.log(this.$store.state.user);
  }
};
</script>
