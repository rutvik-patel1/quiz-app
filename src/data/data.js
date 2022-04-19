//https://vue-app-quiz-default-rtdb.firebaseio.com/quizlist.json
const axios = require("axios");

export async function getQuizList(){
    const results = axios
    .get(
      "https://vue-app-quiz-default-rtdb.firebaseio.com/quizlist.json"
    )
    .then((response) => {
      console.log(response.data);
      return response
    })
    .catch(function (error) {
      console.log(error);
      return false
    });

    return results
}