<template>
  <div>
    <div class="card m-4 shadow" style="width: 18rem; text-align: center">
      <div class="card-header">#ID:{{ quiz.qId }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ quiz.qName }}</h5>
        <p class="card-text">
          Marks:{{ quiz.qMarks }},Time:{{ quiz.qTime }},Description:{{
            quiz.qDescription
          }}
        </p>
        <router-link
          :to="{ name: 'TheQuize', params: { id: quiz.qId, time: quiz.qTime } }"
          class="btn btn-primary"
          >Start Quiz</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("hhhhh", this.quiz);
  },
  props: ["quiz"],
};
</script>

<style></style>
>
