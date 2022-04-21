import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCD3L3f8_SvvWVtnpp0vq39vFk9aSxxGd0",

  authDomain: "vue-app-quiz.firebaseapp.com",

  databaseURL: "https://vue-app-quiz-default-rtdb.firebaseio.com",

  projectId: "vue-app-quiz",

  storageBucket: "vue-app-quiz.appspot.com",

  messagingSenderId: "9145811362",

  appId: "1:9145811362:web:e4ca10afca0f156c8232fb",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
