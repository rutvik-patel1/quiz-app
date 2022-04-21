<template>
  <div style="margin-top: 80px">
    <h1>Result</h1>
    <h5>Quiz ID:{{ qId }}</h5>

    <h4>
      You got {{ score }} out of {{ total }} :{{ (score / total) * 100 }}%
    </h4>
    <h4>Attempted Answers</h4>
    <table>
      <tr>
        <th>Answer</th>
        <th>result</th>
      </tr>
      <tr
        v-for="(ans, index) in attemptedAnswers"
        :key="index"
        :class="ans.result == 'wrong' ? 'red' : 'green'"
      >
        <td>{{ ans.ans }}</td>
        <td>{{ ans.result }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getScore } from "../../data/result";
export default {
  async created() {
    this.qId = this.$route.params.id;
    this.attemptedAnswers = JSON.parse(
      localStorage.getItem("attemptedAnswers")
    );
    getScore(this.qId).then((res) => {
      this.score = res.score;
      this.total = res.totalMarks;
    });
  },
  data() {
    return {
      qId: null,
      score: 0,
      total: 0,
      attemptedAnswers: [],
    };
  },
};
</script>

<style>
h1,
h5,
h4 {
  text-align: center;
}
table {
  margin: auto;
  text-align: center;
  padding: 5px;
}
tr,
th,
td {
  border: 1px solid #000000;
  padding: 5px 60px;
}
.red {
  background-color: rgb(255, 206, 206);
}
.green {
  background-color: rgb(14, 211, 113);
}

/* tr:nth-child(even){background-color: #f2f2f2;} */

tr:hover {
  background-color: #ddd;
}
</style>
>
