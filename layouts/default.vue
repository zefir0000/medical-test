<template>
  <div style="background-color: white; ">
    <br class="asd">
    <el-row :gutter="20">
      <el-col :span="4" class="asd">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16" class="main-body">
        <Header/>
        <nuxt/>
      </el-col>
      <el-col :span="4" class="asd">
        <div class="grid-content bg-purple" ></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.main-body {
  box-shadow: 1px 1px 8px black;
  background-color: lightgrey;
  min-height: 100vh
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
@media only screen and (max-width: 875px) {
  .main-body {
    width: 100%;
    box-shadow: 1px 1px 8px transparent;
  }
  .row-bg {
  display: none
}
.asd {
  display: none
}
}
</style>
