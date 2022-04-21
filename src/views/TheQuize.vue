<template>
  <header class="shadow fixed-top">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #572a2e"
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
          <li class="nav-item ms-3 me-3" v-if="!isDone">
            <a
              class="nav-link active text-white fw-bold"
              aria-current="page"
              href="#"
              >Remaining Time: {{ countDown }}</a
            >
          </li>
          <li class="nav-item ms-3 me-3 border p">
            <a class="nav-link text-white fw-bold" href="#" @click="logout"
              >Logout</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Options
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#" @click="logout">Log out</a>
              </li>

              <li><a class="dropdown-item" href="#">Attempted Quiz</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="container" style="margin-top: 80px">
    <router-view name="helper"></router-view>
  </div>
</template>

<script>
export default {
  async created() {
    this.countDown = this.$route.params.time;
    this.countDownTimer();
    this.isDone = await localStorage.getItem("timeer", false);
  },
  data() {
    return {
      countDown: 100,
      isDone: null,
    };
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.$router.push({ name: "result" });
      }
    },
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
