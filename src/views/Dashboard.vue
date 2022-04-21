<template>
  <the-header></the-header>
  <div class="heading">
    Welcome , <span style="font-weight: 600">{{ uname }}</span>
  </div>
  <div class="nodata" v-if="quizList.length == 0">You Dont have quiz</div>
  <div class="d-flex" v-else>
    <div v-for="quiz in quizList" :key="quiz.qId">
      <quize-card class="d-flex flex-wrap" :quiz="quiz.data"></quize-card>
    </div>
  </div>
</template>

<script>
import {
  getQuizList,
  getAvailableQuiz,
  getQuizListByID,
} from "../data/data.js";
import TheHeader from "../components/TheHeader.vue";
import QuizeCard from "../components/QuizeCard.vue";
const axios = require("axios");
export default {
  components: {
    TheHeader,
    QuizeCard,
  },
  async created() {
    const filteredIds = await getAvailableQuiz();
    if (!!filteredIds) {
      axios.all(filteredIds.map((l) => getQuizListByID(l))).then(
        axios.spread((...res) => {
          this.quizList = res;
          console.log("uiddlis", this.quizList);
        })
      );
    } else {
      this.quizList = [];
    }

    const username = await localStorage.getItem("uName");
    this.uname = username || "User";
  },
  data() {
    return {
      uname: "",
      id: "id",
      quizList: [],
    };
  },
};
</script>

<style scoped>
.heading {
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
}

.nodata {
  font-size: 20px;
  margin-top: 30px;
  text-align: center;
}
</style>
