<template>
  <div>
    <h3>Home Page</h3>
    <form @submit.prevent="sendName">
      <input v-model="name" type="text" />
      <button>Ok</button>
    </form>
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
