import { createStore } from 'vuex'
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword ,signOut } from "firebase/auth";


export default createStore({
  state: {
    userId:null,
    token:null,
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
    },
    resetToken(state){
      state.token = null;
      state.userId = null;
    }
    
  },
  actions: {
    async login({commit}, form) {
      
      const auth = getAuth();
     signInWithEmailAndPassword(auth,form.email,form.pass)
     .then((userCredential) => {
      localStorage.setItem("token",userCredential._tokenResponse.idToken)
      localStorage.setItem('userId',userCredential._tokenResponse.email)
      return userCredential
    }).then((userCredential)=>{
      commit('setUser', {
        token: userCredential._tokenResponse.idToken,
        userId: userCredential._tokenResponse.email,
      }); 
      console.log(userCredential._tokenResponse.idToken)
      console.log(userCredential._tokenResponse.email)

    }).catch(error=>console.log(error))
    
      
    },
    async signup({commit}, form) {
      const auth = getAuth();
        createUserWithEmailAndPassword(auth,form.email,form.pass)
        .then((userCredential) => {
          commit('setUser', {
            token: userCredential._tokenResponse.idToken,
            userId: userCredential._tokenResponse.email,
          });
        console.log(userCredential)
  }).catch(error=>console.log(error))
    },

    async logout({commit}) {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("logoutttttt")
      })
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      commit('resetToken')
    }

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
    
  }
})
