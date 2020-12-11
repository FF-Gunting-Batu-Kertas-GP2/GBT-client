<template>
  <div>
    <h3>Game Page</h3>

    <button @click="yourPick($event)" name="Gunting">Gunting</button>
    <button @click="yourPick($event)" name="Batu">Batu</button>
    <button @click="yourPick($event)" name="Kertas">Kertas</button>

    <p>Pilihan Kamu Saat ini : {{ pick }}</p>

    <p>Health : {{ health }}</p>

    <button @click="getReady">Ready</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      pick: "",
      readyStatus: false,
      health: 2,
      lose: false,
    };
  },
  methods: {
    yourPick(e) {
      this.pick = e.target.name;
      console.log(this.pick);
    },
    getReady() {
      this.readyStatus = true;
      const payload = {
        id: this.id,
        name: this.name,
        pick: this.pick,
        readyStatus: this.readyStatus,
        health: this.health,
        lose: this.lose,
      };
      this.$store.dispatch("getReady", payload);
    },
  },
  sockets: {
    connection() {
      console.log("client connecting");
    },
    S_sendName(payload) {
      console.log(`${payload.name} has joined the game`);
      this.id = payload.id;
      this.name = payload.name;
    },
    S_sendPlayerData(payload) {
      console.log(payload);
      for (let i = 0; i < payload.length; i++) {
        if (payload[i].id == this.id && payload[i].name == this.name) {
          this.health = payload[i].health;
        }
      }
    },
  },
};
</script>

<style></style>
