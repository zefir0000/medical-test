<template>
  <el-container>
    <el-container>
      <el-header class="service-header" style="height: auto">{{data.question}}

      </el-header>
      <el-main>
        <div style=" justify-content: center;">
          <el-radio-group
            v-model="radio1"
            v-for="answer in data.answers"
            :key="answer.answer"
            style="display: block;"
          >

            <el-radio-button style=" margin: 10px;
" :label="answer">{{answer.answer}}</el-radio-button>
          </el-radio-group>
        </div>
      </el-main>
      <el-main class="service-description" v-if="radio1.value == true">
        Excellent !!! :)
        <br>
        <el-button type="primary" round style="float:right" @click="next()">Next</el-button>

        <br>
      </el-main>
      <el-main
        class="service-description"
        style="background-color: red"
        v-if="radio1.value == false"
      >
        Wrong !!! :(
        <br>
        <el-button type="warning" round style="float:right" @click="next()">Next</el-button>

        <br>
      </el-main>
      <br>
      <br>
    </el-container>
  </el-container>
</template>

<script>
import { getServices } from "@/api/index";
const data = {};
const maxPage = 1900;
export default {
  name: "OfferPage",

  data() {
    return {
      radio1: "",
      valuechecks: [{ value: false }],
      data: {
        question: "",
        answers: [],
      }
    };
  },
  methods: {
    next() {
      let min = 0
      let max = 1900
      if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    const page = Math.floor(Math.random() * (max - min + 1) + min);
      // let page = parseInt(this.$route.params.slug) + 1;
      // if (page >= maxPage) {
      //   page = 0;
      // }
      this.$router.push(`/test-random/${page}`);
    }
  },
  async asyncData(context) {
    if (context.route.params.slug >= maxPage) {
      context.route.params.slug = 0;
    }

    const data = await getServices(context.route.params.slug);
    return data;
  },
  created() {
    if (this.$route.params.slug) {
      if (this.$route.params.slug >= maxPage) {
        this.$route.params.slug = 0;
      }

      getServices(this.$route.params.slug).then(result => {
        this.data = result;
      });
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');
.el-radio-button__inner {
  white-space: normal;

}
.check {
  display: block;
  justify-content: center;
}
.el-radio-button__inner {
  min-width: 400px;
  max-width: 100%;
}
.el-checkbox-button__inner {
  justify-content: center;

  min-width: 30%;
}
.service-header {
  font-size: 18px;
  font-weight: 400;
  font-family: "Montserrat", "Helvetica Neue", "Quicksand", "Source Sans Pro",
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}
.service-description {
  height: auto;
  font-size: 42px;
  font-family: 'Spicy Rice', cursive;
  color: aliceblue;
  border-radius: 12px;
  background-color: green;
}
@media only screen and (max-width: 875px) {
  .service-header {
      font-size: 14px;

  }
  .service-description {
    font-size: 28px;
  }
  .el-radio-button__inner {
    min-width: 320px;
  }
}
</style>
