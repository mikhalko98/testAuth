<template>
  <div class="mainPage">
    <div class="toolbar">
      <div id="logIn"><router-link to="/logIn"><p>Log in</p></router-link></div>
    </div>
    <div class="logo">
      <img id="logo" src="../assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar{
  background-color: aqua;
  width: 100%;
  height: 60px;
  border-radius: 30px;
}
#logIn{
  position: relative;
  float: right;
  height: 100%;
  display: inline-block;
  font-size: 30px;
}
#logIn p{
  color: black;
  margin-right: 20px;
  top: 50%;
  transform: translate(0, -50%)
}
h1 {
  font-weight: normal;
}
.logo{
  margin-top: 100px
}
#logo{
  width: 200px;
  height: 200px;
}
a {
  text-decoration: none; /* Отменяем подчеркивание у ссылки */
}
</style>
