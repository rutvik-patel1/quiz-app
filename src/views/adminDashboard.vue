<template>
  <header class="shadow">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #dc3545"
    >
      <a class="navbar-brand text-white ms-5 fw-bold fs-5" href="#">Admin dashboard</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item ms-3 me-3 border">
            <a class="nav-link text-white" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <h2>User List</h2>
  <div class="container userlist">
     <table>
         <tr>
             <th >User ID</th>
             <th>Name</th>
             <th>Email</th>
             <th> Attempted Quiz</th>
             <th>Available Quiz</th>
         </tr>
         <tr v-for="user in userList" :key="user">
             <td>{{user.id}}</td>
             <td>{{user.name}}</td>
             <td>{{user.email}}</td>
             <td> 
                 <span v-for="quiz in user.attemptedQuiz" :key="quiz" ><b>Quiz id:</b>{{quiz.id}} <span> &nbsp;&nbsp;&nbsp;&nbsp;  </span><b>Score:</b>&nbsp;&nbsp;&nbsp;{{quiz.score}}/{{quiz.totalMarks}}<br></span>
             </td>
             <td >Quiz id: <br>
                 <span v-for="quiz in user.availableQuiz" :key="quiz">{{quiz.id}}<br></span>
            </td>
         </tr>
     </table>
  </div>
</template>

<script>
const axios = require("axios")
export default {
async created() {
     this.userList  = await axios
    .get(
      `https://vue-app-quiz-default-rtdb.firebaseio.com/users.json`
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
   },
   data() {
       return {
           userList:[]
       }
   },
methods: {
     logout() {
          this.$router.push({ name: "Admin" });
    },
  },
};
</script>

<style scoped>
header,nav{
    background-color: rgb(45, 25, 27) !important
}
h2{
    text-align: center;
    margin-bottom:10px;
}

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
  padding: 5px 10px;
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
