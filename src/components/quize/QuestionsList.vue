<template>
  <div class="container" style="margin-top:80px;">
    <form @submit.prevent="submit">
      <div v-for="(data,index) in dataList" :key="index">
        <div>
        <ul class="quiz">
        <li>
          <p>{{index+1}}){{data.question}}</p>
          <ul class="choices" v-for="(ans,index) in [data.correct_answer,...data.incorrect_answers]" :key="index">
            <li><label><input type="radio" :name="data.question" :ref='"q"+index' :value="ans"><span>{{ans}}</span></label></li>
          </ul>
        </li>
        </ul>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mb-5">Submit Answers</button>
    </form>
  </div>
</template>
<script>
const axios = require('axios').default;

export default {
async created(){
  console.log("hello")
  this.getData()
  console.log(this.dataList)
},
data() {
  return {
    dataList:[],
    name:"gg",
    answerList:[],
    dataLength:0 
     }
},
 methods:{
  getData(){
    axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
  .then((response)=> {
    console.log(response.data.results);
    this.dataList = response.data.results
    this.dataLength = this.dataList.length
    
  })
  .catch(function (error) {
    console.log(error);
  })
  },
  submit(){
   console.log("submit clicked")

  console.log(this.$refs.q1.value)
   console.log("submit clicked")
   
  //  this.$router.push({name:'result'})
 }
   
 },
 
}
</script>

<style scoped>
.heading{
    font-size: 24px;
    margin-top:10px;
}
.quiz{
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