<template>
  <div class="head">
    <img v-lazy="require(`@/img/icon/title.png`)" class="titleIcon" alt="">
    <!--<button class="loginButton">ログイン</button>-->
  </div>
</template>
  
<script>
export default {
  name: 'MainHeader',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.head {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  top: 0;
  height: 45px;
}
.title {
  float: left;
  font-size: 20px;
  margin-top: 0;
  margin-left: 5px;
  color: rgb(19, 53, 204);
}
.loginButton {
  float: right;
}
.titleIcon {
  width: 250px;
  margin-top: 12px;
}
</style>
  