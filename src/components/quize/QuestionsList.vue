<template>
  <div class="container" style="margin-top: 80px">
    <form @submit.prevent="submit">
      <div v-for="(data, index) in dataList" :key="index">
        <div>
          <ul class="quiz">
            <li>
              <p>{{ index + 1 }}){{ data.question }}</p>
              <ul
                class="choices"
                v-for="ans in randomOptions([
                  data.correct_answer,
                  ...data.incorrect_answers,
                ])"
                :key="ans"
              >
                <li>
                  <label
                    ><input
                      type="radio"
                      :name="index"
                      :ref="'q' + index"
                      :value="ans"
                      required
                    /><span>{{ ans }}</span></label
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mb-5">Submit Answers</button>
    </form>
    <!-- <p id="result"></p> -->
  </div>
</template>
<script>
// const axios = require("axios").default;
import {
  getQuizList,
  getAvailableQuiz,
  getQuizListByID,
} from "../../data/data";
import { postResult } from "../../data/result";
export default {
  async created() {
    console.log("hello");
    // this.getData();
    // console.log(this.dataList);
    this.qID = this.$route.params.id;
    getQuizList(this.qID)
      .then((res) => {
        console.log("plll", res.data);
        this.dataList = res.data;
        return res.data;
      })
      .then((res) => {
        res.forEach((each) => {
          this.correctAns.push(each.correct_answer);
        });
      });
    // console.log("dataList: ",this.dataList)
    console.log("correctAns", this.correctAns);
  },
  data() {
    return {
      dataList: [],
      name: "gg",
      qID: 1,
      answerList: [],
      dataLength: 0,
      attemptedAns: [],
      correctAns: [],
    };
  },
  methods: {
    randomOptions(arr) {
      const result = arr.sort(() => Math.random() - 0.5);
      return result;
    },
    getData() {
      axios
        .get(
          "https://vue-app-quiz-default-rtdb.firebaseio.com/1/questions.json"
        )
        .then((response) => {
          console.log(response.data.results);
          this.dataList = response.data.results;
          this.dataLength = this.dataList.length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    submit() {
      console.log("submit clicked");
      // console.log(this.$refs.q1.value )
      // document.getElementById("result").innerHTML = "";
      var ele = document.getElementsByTagName("input");
      const attemptedAnswers = [];
      for (let i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          if (ele[i].checked) {
            attemptedAnswers.push(ele[i].value);
          }
        }
      }
      this.attemptedAns = attemptedAnswers;
      // localStorage.attemptedAnswers = JSON.stringify(attemptedAnswers);
      let results = [];
      let score = 0;
      for (let i = 0; i < this.attemptedAns.length; i++) {
        if (this.attemptedAns[i] == this.correctAns[i]) {
          score = score + 1;
          let r = this.attemptedAns[i];
          console.log("inif");
          const obj = {
            result: "correct",
            ans: r,
          };
          results.push(obj);
        } else {
          let r = this.attemptedAns[i];
          console.log("inelse");
          const obj = {
            result: "wrong",
            ans: r,
          };
          results.push(obj);
        }
      }
      console.log("attept", this.attemptedAns);
      console.log("corr", this.correctAns);
      console.log("ress", results);
      localStorage.attemptedAnswers = JSON.stringify(results);
      postResult(this.qID, score, this.correctAns.length)
        .then((res) => {
          console.log("postresult", res);
          localStorage.setItem("timeer", true);
          
          this.$store.commit('setVisibility',false)
          console.log("visibility",this.$store.state.visible)
          this.$router.push({ name: "result" });
        })
        .catch((error) => {
          console.log("somethinf went wrong");
          console.error(error);
        });
    },
  },
  computed: {},
};
</script>

<style scoped>
.heading {
  font-size: 24px;
  margin-top: 10px;
}
.quiz {
  list-style-type: none;
  padding: 0;
}
.quiz,
.choices {
  list-style-type: none;
  padding: 0;
}

.choices li {
  margin-bottom: 5px;
}

.choices label {
  display: flex;
  align-items: center;
}

.choices label,
input[type="radio"] {
  cursor: pointer;
}

input[type="radio"] {
  margin-right: 8px;
}

.view-results {
  padding: 1rem;
  cursor: pointer;
  font-size: inherit;
  color: white;
  background: teal;
  border-radius: 8px;
  margin-right: 5px;
}

.my-results {
  padding: 1rem;
  border: 1px solid goldenrod;
}
</style>
