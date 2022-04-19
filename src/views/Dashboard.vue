<template>
  <the-header></the-header>
  <div class="heading">Welcome , <span style="font-weight:600">{{ username }}</span> </div>
  <div class="d-flex" >
      
          <div v-for="quiz in quizList" :key="quiz.qId">
              <quize-card class="d-flex flex-wrap" :quiz="quiz"></quize-card>
          </div>

  </div>
</template>

<script>
import {getQuizList} from "../data/data.js"
import TheHeader from '../components/TheHeader.vue'
import QuizeCard from '../components/QuizeCard.vue'
export default {
components:{
    TheHeader,
    QuizeCard
},
async created(){
  
  const {a,...result} = await getQuizList()
  this.quizList = result.data
  console.log("ressukt",result)

},
data() {
    return {
        username : 'Rutvik Patel',
        id:'id',
        quizList:[]
    }
},

}
</script>

<style scoped>
.heading{
    font-size: 24px;
    margin-top:10px;
    text-align: center;
}
</style>