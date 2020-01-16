<template>
    <div>
        <h1>First comp</h1>
        <h2>{{myVar}}</h2>
        <button @click="myVar = 'Giallo'">OK</button>
    </div>
</template>
<script>
export default {
    name: "FirstComponent",
    data() {
        return {
            myVar: 'Bianco'
        }
    }
}
</script>
<style scoped>
    div {
        border: 1px solid black;
    }
</style>