<template>
  <div>
      <ul class="quiz">
      <li>
        <p>{{num+1}}){{data2.question}}</p>
        <ul class="choices" v-for="(ans,index) in answerList" :key="index">
          <li><label><input type="radio" :name="num+1" :value="ans"><span>{{ans}}</span></label></li>
        </ul>
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  props:['data2','num'],
  created(){
      this.answerList = [this.data2.correct_answer,...this.data2.incorrect_answers]
      console.log("num",this.num)
  },
  data() {
      return {
          answerList:[]
      }
  },
  methods:{}

}
</script>

<style scoped>
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