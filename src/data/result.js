const axios = require("axios");

export async function postResult(qid,score,total){
const fid = await localStorage.getItem('fid')
 axios.put(`https://vue-app-quiz-default-rtdb.firebaseio.com/users/${fid}/attemptedQuiz/${qid}.json`,{
    "id":parseInt(qid),
    "score":score,
    "totalMarks":total
 })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

export async function getScore(qid){
    const fid = await localStorage.getItem('fid')
    const results = axios.get(`https://vue-app-quiz-default-rtdb.firebaseio.com/users/${fid}/attemptedQuiz/${qid}.json`)
    .then(function (response) {
        console.log(response);
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      });
     return results
}