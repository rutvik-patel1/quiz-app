<template>
      <div class="card mx-auto shadow" style="max-width:540px;margin-top:70px;">
          <div class="card-body">
              <h3 class="card-title">Login</h3>
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>

                <p><router-link to="/register">Dont have an account? Register</router-link></p>
              </form>
          </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>