<template>
    <div class="index">{{title}}</div>
</template>

<script>
    export default {
        name: 'index',
        components: {},
        data() {
            return {
              title: 'cli'
            }
        }
    }
</script>

<style lang="less" scoped>
  .index{
    font-size: 50px;
    background: url("../assets/logo.png");
  }
</style>
