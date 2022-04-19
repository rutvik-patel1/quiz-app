<template>
      <div class="card mx-auto shadow" style="max-width:540px;margin-top:70px;">
          <div class="card-body">
              <h3 class="card-title">Login</h3>
              <form @submit.prevent="submit">
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" v-model="form.email" class="form-control" id="email" aria-describedby="emailHelp" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" v-model="form.pass" class="form-control" id="password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

                <p><router-link to="/register">Dont have an account? Register</router-link></p>
              </form>
          </div>
      </div>
</template>

<script>

export default {
data() {
  return {
    form : { email: '' , pass : ''},
     error: null
  }
},
methods:{
  async submit() {
    this.$store.dispatch('login',this.form).then((res)=>{
       let redirectTo = this.$route.query.redirectTo;
       if(redirectTo){
          this.$router.replace({ path: redirectTo });
       }
       return res
    }).catch((err)=>{
       console.log("error in login")
    })
    
      

  }    
}

}
</script>

<style>

</style>