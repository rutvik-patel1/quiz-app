<template>
  <header class="shadow">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #dc3545"
    >
      <a class="navbar-brand text-white ms-5 fw-bold fs-2" href="#">Quuuiz</a>
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
          <li class="nav-item border-bottom ms-3 me-3">
            <a class="nav-link active text-white" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item ms-3 me-3 border">
            <a class="nav-link text-white" @click="logout">Logout</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Settings
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Log out</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      this.$store
        .dispatch("logout")
        .then((res) => {
          this.$router.push({ name: "Login" });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
