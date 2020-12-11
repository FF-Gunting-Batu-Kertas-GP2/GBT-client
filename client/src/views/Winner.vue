<template>
    <div class="winner">
        <h1>Selamat anda juara</h1>
        <button @click="home">Back</button>
    </div>
</template>

<script>
export default {
    name: 'winnerPage',
    methods: {
        home () {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>