<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    this.$router.replace('/home')
  }
}
</script>

<style>

</style>
