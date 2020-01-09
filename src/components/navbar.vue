<template>
  <div>
    <div id="fixme">
      <ul>
        <li class="width">
          <router-link class="navlink" :to="{name: 'home'}">
            <i class="fas fa-shield-alt fa-2x"></i>
          </router-link>
        </li>
        <li class="width">
          <router-link class="navlink" :to="{name: 'calendar'}">
            <i class="far fa-calendar-alt fa-2x"></i>
          </router-link>
        </li>
        <li class="width">
          <router-link class="navlink" :to="{name: 'sensors'}">
            <i class="fas fa-fingerprint fa-2x"></i>
          </router-link>
        </li>
        <li class="width">
          <router-link class="navlink" :to="{name: 'profile'}">
            <i class="fas fa-user fa-2x"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fixme {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  z-index: 2
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

.width {
  padding-bottom: 15px;
  padding-top: 15px;
  width: 25%;
  text-align: center;
}

.navlink {
  /* color: blue */
}

</style>

<script>
export default {};
</script>

