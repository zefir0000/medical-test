<template>
  <section class="container">
    <div style="width: 100%;" >
      <el-row type="flex" justify="center" style="width: 100%;" >
        <nuxt-link to="/test/1" class="button-link" ><el-button type="success">Package 1</el-button></nuxt-link>
        <nuxt-link to="/test/1" class="button-link" ><el-button type="success">Package 2</el-button></nuxt-link>
        <nuxt-link to="/test/1" class="button-link" ><el-button type="success">Package 3</el-button></nuxt-link>
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
  margin: 10px;
}
</style>
