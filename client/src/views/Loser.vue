<template>
    <div>
        <h1>maaf anda kalah</h1>
        <button @click="home">Back</button>
    </div>
</template>

<script>
export default {
    name: 'LoserPage',
    methods: {
        home () {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>