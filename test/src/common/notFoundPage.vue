<template>
    <div class="content">
      <h1>{{ msg }}</h1>
      <h3><router-link to="/">main page</router-link></h3>
    </div>
</template>

<script>
export default {
  name: 'notFoundPage',
  data () {
    return {
      msg: 'Page not found'
    }
  }
}
</script>

<style scoped>

</style>
