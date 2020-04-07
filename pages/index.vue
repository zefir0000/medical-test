<template>
  <section class="container">
    <div style="width: 100%;" >
      <el-row type="flex-inline" justify="center" style="width: 100%; " >
        <nuxt-link to="/test/1" class="button-link" ><el-button type="success">Start lern</el-button></nuxt-link>
        <!-- <nuxt-link to="/testRandom/1" class="button-link" ><el-button type="success" style=" margin: 20px 0px">Start Test</el-button></nuxt-link> -->
        <nuxt-link to="/test-random/1" class="button-link" ><el-button type="success">Random Questions</el-button></nuxt-link>
      </el-row>
      <br>
      <hr>
      <br>
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
}
.menu-root {
  width: 100%;
  justify-content: space-around;
  display: flex;
}

.menu-root-button {
  color: orange;
  margin: 0px 25px 0px 25px;
}
.menu-root-button:hover {
  color: red;
}
.button-link {
  margin: 20px;
}
@media only screen and (max-width: 875px) {

}
</style>
