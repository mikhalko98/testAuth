<template>
  <div class = "mainColm">
    <h2>Log in</h2>
    <p>Enter login and password</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="login">Login</label><br/>
        <input type="text" v-model="login" name="login">
        <div v-show="submitted &&  !login" class="invalid-login">Incorrect login</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label><br/>
        <input type="password" v-model="password" name="password">
        <div v-show="submitted &&  !password" class="invalid-password">Incorrect password</div>
      </div>
      <div class="form-group">
        <button class="btn-Login">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'logInPage',
  data () {
    return {
      login: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true
      if (!this.checkLogin()) {
        this.login = ''
      }
      if (this.password.length < 5) {
        this.password = ''
      }
      if(this.login && this.password){
        const {login, password} = this
        const {dispatch} = this.$store
      }
    },
    checkLogin (e) {
      const x = this.login
      const atpos = x.indexOf('@')
      const dotpos = x.lastIndexOf('.')
      return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length)
    }
  }
}
</script>

<style scoped>
.mainColm{
  position: relative;
  background: #B0E0E6;
  background: linear-gradient(to top, #FFFAF0, #6495ED);
  border-radius: 30px;
  border-style: solid;
  border-color: #6495ED;
  height: 100%;
  width: 85%;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.invalid-login{
  color: red;
  font-size: 12px;
}
.invalid-password{
  color: red;
  font-size: 12px;
}
.form-group input{
  background-color: #FFFFFF;
  width: 30%;
  height: 25px;
  border-radius: 5px;
  border-style: solid;
}
.btn-Login{
  background-color: #FFFFFF;
  height: 30px;
  border-radius: 5px;
  border-style: solid;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
