<template>
  <the-header></the-header>
  <div class="heading">Welcome , <span style="font-weight:600">{{ username }}</span> </div>
  <div class="d-flex flex-wrap">
      <quize-card :id="id"></quize-card>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import QuizeCard from '../components/QuizeCard.vue'
export default {
components:{
    TheHeader,
    QuizeCard
},
data() {
    return {
        username : 'Rutvik Patel',
        id:'id'
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