<template>
  <div id="app">
    <div id="nav">
    </div>
    <h2> App colore verso A: <u>{{colorA}}</u></h2>
    <button  @click="colorA = 'Orange'">Change color</button>
    <div class="row">
      <div class="col-md-6">
        <component-a
                :color="colorA"
                @resetEvent="colorA = $event"
        />
      </div>
      <div class="col-md-6">
        <component-b :color="colorB"/>
      </div>
    </div>
<!--    <router-view/>-->
  </div>
</template>
<script>
  import ComponentA from "./components/ComponentA";
  import ComponentB from "./components/ComponentB";

  export default {
    name: 'App',
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB
    },
    data() {
      return {
        colorA: 'Black',
        colorB: 'White'
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
