<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  beforeRouteLeave: function(to, from, next) {
    console.log("beforeRouteLeaveが実行されました");
    window.confirm("保存しよ？");
    next();
  }
};
</script>
