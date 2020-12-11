<template>
  <div class="container">
    <h4>Hello {{name}},</h4>
    <h3>Rock, Scissor or Paper?</h3>

    <div class="container">
      <div class="row">
        <div class="col">
          <img @click="yourPick($event)" name="Batu" class="m-1" src="../assets/rock1.png" />
        </div>
        <div class="col">
          <img @click="yourPick($event)" name="Gunting" class="m-1" src="../assets/scissor1.png" />
        </div>
        <div class="col">
          <img @click="yourPick($event)" name="Kertas" class="m-1" src="../assets/paper1.png" />
        </div>
      </div>
    </div>

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
