<template>
  <div id="app" :style="{ minHeight: windowHeight + 'px' }">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
import {getJwt, clearJwt, clearUser, setUser} from "./jwt.js"
import axios from "axios"

axios.defaults.baseURL = "https://api-spectrum.herokuapp.com/";

export default {
  data() {
    return {
      windowHeight: 0
    };
  },

  created() {
    this.handleWindowHeight();

    document.addEventListener("resize", this.handleWindowHeight());
  },

  methods: {
    handleWindowHeight() {
      this.windowHeight = window.innerHeight;
    },

    me() {
      axios
        .get("/auth/me")
        .then(res => {
          const me = res.data.content.users;
          if (me) {
            setUser(me);
            this.$store.dispatch("setLoggedUser", me);
          } else {
            const Exception = { message: "Unexpected error" };
            throw Exception;
          }
        })
        .catch(err => {
          this.$store.dispatch("setLoggedUser", null);
          clearJwt();
          clearUser();
          throw err;
        });
    },
    initAuth() {
      clearUser();
      const jwt = getJwt();
      if (!jwt) {
        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setLoggedUser", null);
      }
      axios.interceptors.request.use(
        config => {
          const jwtAxios = getJwt();
          config.headers.authorization = "";
          if (jwtAxios) {
            config.headers.authorization = "Bearer " + jwtAxios;
          }
          return config;
        },
        error => Promise.reject(error)
      );
      if (jwt) {
        this.me(jwt);
      }
    }
  },
  computed: {},
  async beforeCreate() {
    try {
      await this.initAuth();
    } catch (error) {
      throw error;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
@import "~bulma-helpers/css/bulma-helpers.min.css";

/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

#app {
  background-color: #f2f2f2;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.noBar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
.noBar {
  -ms-overflow-style: none;
}

input:focus {
  border-color: #1374f2 !important;
  border-bottom-color: #1374f2 !important;
}
</style>
