<template>
  <div class="container login">
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" v-model="myemail" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="mybassword" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click="chekme">Login</button>
      </p>
    </div>

    <div class="notification is-danger" ref="notification">
      <button class="delete" @click="close"></button>
      It may be an incorrect email address or password.
      <br />
      <strong>Please re-enter</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myemail: "",
      mybassword: ""
    };
  },
  methods: {
    chekme() {
      // console.log();
      if (this.mybassword && this.myemail == 1) {
        console.log("true");
        this.$router.replace("/admin");
      } else {
        console.log("false");
        this.$refs["notification"].style.display = "block";
      }
    },
    close() {
      this.$refs["notification"].style.display = "none";
    }
  }
};
</script>

<style scoped>
.login {
  padding: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #2c3e50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.notification {
  display: none;
}
</style>