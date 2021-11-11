<template>
  <div @click="process1">
    HelloWorld
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    process1() {
      console.log(123);
      console.log(process.env);
    }
  }
}

</script>
<style lang='less' scoped>
</style>