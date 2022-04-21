<template>
  <div class="card mx-auto shadow" style="max-width: 540px; margin-top: 70px">
    <div class="card-body">
      <h3 class="card-title">Register</h3>
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="name"
            id="name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            id="email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="InputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="pass1"
            id="InputPassword1"
            required
          />
        </div>
        <div class="mb-3">
          <label for="InputPassword2" class="form-label"
            >Re-enter Password</label
          >
          <input
            type="password"
            class="form-control"
            v-model="pass2"
            id="InputPassword2"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <p>
          <router-link to="/login">Already have an account? Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      name: "",
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  methods: {
    async submit() {
      const form = { email: this.email, pass: this.pass1, name: this.name };
      await this.$store.dispatch("signup", form);
      console.log("done");
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style></style>
