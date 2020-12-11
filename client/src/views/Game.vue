<template>
  <div>
    <h3>Game Page</h3>
    <div class="container">
      <div class="container mt-10">
        <div id="card" class="row justify-content-center align-item-center">
          <div class="col-5 mt-5 rounded" style="width: 300px;">
            <img
              style="width: 200px;"
              class="m-5"
              src="../assets/scissors.png"
            />
            <button
              class="btn btn-primary"
              @click="yourPick($event)"
              name="Gunting"
            >
              Gunting
            </button>
          </div>
          <div class="col-5 mt-5 rounded" style="width: 300px;">
            <img style="width: 200px;" class="m-5" src="../assets/rock.png" />
            <button
              class="btn btn-warning"
              @click="yourPick($event)"
              name="Batu"
            >
              Batu
            </button>
          </div>
          <div class="col-5 mt-5 rounded" style="width: 300px;">
            <img style="width: 200px;" class="m-5" src="../assets/paper.png" />
            <button
              class="btn btn-danger"
              @click="yourPick($event)"
              name="Kertas"
            >
              Kertas
            </button>
          </div>
        </div>
      </div>
      <div class="position-absolute top-0 start-0 mt-3 mx-3">
        JOINED PLAYER:
        <p v-for="player in playerName" :key="player.id">{{player.name}}</p>
      </div>
    </div>

    <p>Pilihan Kamu Saat ini : {{ pick }}</p>

    <p>Health : {{ health }}</p>

    <button @click="getReady">Ready</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: "",
      name: "",
      pick: "",
      readyStatus: false,
      health: 2,
      lose: false,
      winner: false,
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
      this.$store.commit('loadPlayer', payload.player)
      console.log(`${payload.payload.name} has joined the game`);
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
    S_sendWinner(payload) {
      console.log(payload);
      for (let i = 0; i < payload.length; i++) {
        if (payload[i].id == this.id && payload[i].name == this.name) {
          this.winner = true;
          console.log(this.winner);
        }
      }
    },
  },
  computed: {
    ...mapState ({
      playerName: 'playerName'
    })
  }
};
</script>

<style></style>
