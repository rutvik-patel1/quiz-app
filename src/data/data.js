//https://vue-app-quiz-default-rtdb.firebaseio.com/quizlist.json
const axios = require("axios");

export async function getQuizList(id) {
  const results = axios
    .get(
      `https://vue-app-quiz-default-rtdb.firebaseio.com/quizlist/${id}/qList/questions.json`
    )
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

  return results;
}
export async function getQuizListByID(id) {
  const results = axios
    .get(`https://vue-app-quiz-default-rtdb.firebaseio.com/quizlist/${id}.json`)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

  return results;
}

export async function getAvailableQuiz() {
  const userId = await localStorage.getItem("userId");
  const results = axios
    .get("https://vue-app-quiz-default-rtdb.firebaseio.com/users.json")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then((res) => {
      const arr = [];
      console.log("this..", res);
      const items = res.filter((each) => {
        console.log(each.email == userId);
        return each.email == userId;
      });
      if (items.length == 0) {
        return false;
      }
      console.log("items", items);
      localStorage.setItem("uName", items[0].name);
      localStorage.setItem("fid", items[0].id);
      items[0].availableQuiz.forEach((each) => arr.push(each.id));
      return arr;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

  return results;
}
