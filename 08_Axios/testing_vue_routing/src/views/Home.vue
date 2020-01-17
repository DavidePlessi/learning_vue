<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <profile-component/>
        </div>
        <div class="col-md-6">
          <h1>HOME</h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ProfileComponent from "../components/profile/NewProfile";
  import {mapGetters} from "vuex";
  export default {
    name: 'home',
    data (){
      return {
        colore : 'Verde'
      }
    },
    methods : {
      resetF(){
        this.colore= 'Bianco';
      }
    },
    computed: {
      ...mapGetters('profile', [
        "getNome"
      ])
    },
    components: {
      'profile-component' : ProfileComponent
    }
  }
</script>