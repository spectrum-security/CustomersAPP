<template>
  <div>
    <div id="fixme">
      <ul>
        <li class="width">
          <a>
            <i class="fas fa-shield-alt fa-2x"></i>
          </a>
        </li>
        <li class="width">
          <a>
            <i class="far fa-calendar-alt fa-2x"></i>
          </a>
        </li>
        <li class="width">
          <a>
            <i class="fas fa-fingerprint fa-2x"></i>
          </a>
        </li>
        <li class="width">
          <a>
            <i class="fas fa-user fa-2x"></i>
          </a>
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


</style>

<script>
export default {};
</script>
