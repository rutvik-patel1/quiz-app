<template>
  <div class="card mx-auto shadow" style="max-width: 540px; margin-top: 70px">
    <div class="card-body">
      <h3 class="card-title">Login</h3>
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="email" class="form-label">User Name</label>
          <input
            type="text"
            v-model="form.email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            v-model="form.pass"
            class="form-control"
            id="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { email: "", pass: "" },
      error: null,
    };
  },
  methods: {
    async submit() {
      if (this.form.email == 'admin' && this.form.pass =="admin"){
          this.$router.push({name:'Admind'})
      }
    },
  },
};
</script>

<style></style>
