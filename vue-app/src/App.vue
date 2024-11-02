<template>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <MainHeader />
  <MainBody />
  <MainFooter />
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainBody from './components/MainBody.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainBody,
    MainFooter,
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
img {
	user-drag: none;
	-webkit-user-drag: none;
	-moz-user-select: none;
}
#app {
  font-family: "Zen Maru Gothic", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
