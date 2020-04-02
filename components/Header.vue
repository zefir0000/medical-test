<template class="bg-gradient">
  <el-row :gutter="20" class>
    <el-col :span="6">
      <img id="header-logo" src="../static/logo.png">
      <nuxt-link to="/">
        <el-button class="back-button" type="info" v-if="back" icon="el-icon-top" plain>Back to menu</el-button>
      </nuxt-link>
    </el-col>
    <el-col :span="24" :offset="0" class="head-title">
      <br> Medical University - Tests 
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      back: false
    }
  },
  watch: {
  '$route': function(asd) {
    this.back = this.$route.path != '/' ? true : false;

  }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
.head-title {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 48px;
  font-family: "Great Vibes", cursive;
  margin-bottom: 30px;
}
.bg-gradient {
  height: 150px;
}
.el-menu-demo {
  float: right;
}
.grid-content {
  min-height: 36px;
}
.back-button {
  position: absolute;
  right: 30px;
  top: 10px;
}
#header-logo {
  position: absolute;
  left: 10px;
  top: -10px;
  width: 180px;
}
</style>
