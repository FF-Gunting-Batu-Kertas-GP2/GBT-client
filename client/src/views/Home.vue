<template>
  <div>
    <div class="container">
      <div class="login-form container mt-10">
        <div class="row justify-content-center">
          <div class="col-4 p-3 mt-5 shadow rounded">
            <h1 class="mt-2" style="margin-bottom: 20px">GBT.io <small style="font-size=1px;">v2.0</small></h1>
            <img class="m-5" src="../assets/logo.png" />
            <form @submit.prevent="sendName" id="login-form">
              <div class="form-group">
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  placeholder="Your Nickname"
                />
              </div>
              <button type="submit" class="btn btn-success mt-4">Go</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "",
    };
  },
  components: {},
  sockets: {},
  methods: {
    sendName() {
      const id = Math.floor(Math.random() * 9999);
      this.$store.dispatch("sendName", { id: id, name: this.name });
    },
  },
};
</script>
