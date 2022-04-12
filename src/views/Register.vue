<template>
      <div class="card mx-auto shadow" style="max-width:540px;margin-top:70px;">
          <div class="card-body">
              <h3 class="card-title">Register</h3>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" required>
                  
                </div>
                <div class="mb-3">
                  <label for="InputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="InputPassword1" required>
                </div>
                <div class="mb-3">
                  <label for="InputPassword2" class="form-label">Re-enter Password</label>
                  <input type="password" class="form-control" id="InputPassword2" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p><router-link to="/login">Already have an account? Login</router-link></p>
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