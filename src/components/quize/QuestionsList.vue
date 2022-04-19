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
                v-for="ans in randomOptions([data.correct_answer, ...data.incorrect_answers])"
                :key="ans"
              >
                <li>
                  <label
                    ><input
                      type="radio"
                      :name="index"
                      :ref="'q' + index"
                      :value="ans"
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
    <p id="result"></p>
  </div>
</template>
<script>
const axios = require("axios").default;

export default {
  async created() {
    console.log("hello");
    this.getData();
    // console.log(this.dataList);
    this.qID = this.$route.params.id
  },
  data() {
    return {
      dataList: [],
      name: "gg",
      qID: 1,
      answerList: [],
      dataLength: 0,
    };
  },
  methods: {
    randomOptions(arr){
      const result = arr.sort(() => Math.random() - 0.5)
      return result
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
      console.log(this.$refs.q1.value )
      document.getElementById("result").innerHTML = "";
      var ele = document.getElementsByTagName("input");

      for (let i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          if (ele[i].checked)
            document.getElementById("result").innerHTML +=
              ele[i].name + " Value: " + ele[i].value + "<br>";
        }
      }
      // console.log(this.$refs.q1.value)
      console.log("submit clicked");

      //  this.$router.push({name:'result'})
    },
  },
  computed:{
    
  }
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
