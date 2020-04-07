<template>
  <el-container class="service-header" style="display: block">
    <ol syle="display: block" style="height: auto" v-for="(item, index) in data" :key="item.question">
      {{ index +1 }}. {{item.question}}
      <div style=" justify-content: center;">
        <div v-for="answer in item.answers" :key="answer.answer" style="display: block;">
          <div style=" margin: 10px;
" :label="answer">{{answer.answer}} <span v-if="answer.value">*</span></div>
        </div>
        <br><br>
      </div>
    </ol>
    <br><br>
    <el-main></el-main>
    <!-- <div>{{data}}</div> -->
  </el-container>
</template>

<script>
import { getServices, getData } from "@/api/index";
const data = {};
const maxPage = 702;
export default {
  name: "OfferPage",

  data() {
    return {
      radio1: "",
      valuechecks: [{ value: false }],
      data: {
        question: "",
        answers: []
      }
    };
  },
  methods: {
    next() {
      let page = parseInt(this.$route.params.slug) + 1;
      if (page >= maxPage) {
        page = 0;
      }
      this.$router.push(`/test/${page}`);
    }
  },
  async asyncData(context) {
    const data = await getData();
    return data;
  },
  created() {
    getData().then(result => {
      this.data = result;
    });
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap");
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
  font-family: "Spicy Rice", cursive;
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
