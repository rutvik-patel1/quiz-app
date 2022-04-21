import { createStore } from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export default createStore({
  state: {
    userId: null,
    token: null,
    uName: null,
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
    },
    setName(state, payload) {
      state.uName = payload;
    },
    resetToken(state) {
      state.token = null;
      state.userId = null;
      state.uName = null;
    },
  },
  actions: {
    async login({ commit }, form) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, form.email, form.pass)
        .then((userCredential) => {
          localStorage.setItem("token", userCredential._tokenResponse.idToken);
          localStorage.setItem("userId", userCredential._tokenResponse.email);
          return userCredential;
        })
        .then((userCredential) => {
          commit("setUser", {
            token: userCredential._tokenResponse.idToken,
            userId: userCredential._tokenResponse.email,
          });
          console.log(userCredential._tokenResponse.idToken);
          console.log(userCredential._tokenResponse.email);
        })
        .catch((error) => console.log(error));
    },
    async signup({ commit }, form) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, form.email, form.pass)
        .then((userCredential) => {
          commit("setUser", {
            token: userCredential._tokenResponse.idToken,
            userId: userCredential._tokenResponse.email,
          });
          console.log(userCredential);
          const obj = {
            attemptedQuiz: [{ id: 2, score: 9, totalMarks: 10 }],
            availableQuiz: [{ id: 1 }, { id: 0 }],
            email: form.email,
            id: 1,
            name: form.name,
          };
          axios
            .post(
              `https://vue-app-quiz-default-rtdb.firebaseio.com/users.json`,
              obj
            )
            .then((res) => {
              console.log(res);
            })
            .catch((error) => console.log(error));
        })

        .catch((error) => console.log(error));
    },

    async logout({ commit }) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("logout");
        })
        .catch((err) => {
          console.error(err);
        });
      localStorage.clear();
      commit("resetToken");
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
    token(state) {
      return state.token;
    },
  },
});
