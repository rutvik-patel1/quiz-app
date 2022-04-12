<template>
  <the-header></the-header>
  <div class="container" style="margin-top:80px;">
    <div v-for="(data,index) in dataList" :key="index">
      <questions-list :num="index" :data2="data">{{index}}</questions-list>
    </div>
    <a @click="submit" class="btn btn-primary mb-5">Submit Answers</a>
  </div>
</template>

<script>
import TheHeader from '../components/quize/TheHeader.vue'
import QuestionsList from '../components/quize/QuestionsList.vue'
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
    name:"gg"
  }
},
components:{
    TheHeader,
    QuestionsList 
},
 methods:{
  getData(){
    axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
  .then((response)=> {
    console.log(response.data.results);
    this.dataList = response.data.results
    
  })
  .catch(function (error) {
    console.log(error);
  })
  },
  submit(){
   console.log("submit clicked")
   this.$router.push('/result')
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
</style>