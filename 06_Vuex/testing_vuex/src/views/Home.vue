<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Benvenuto : {{ getNome }}
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <profile-component></profile-component>
        </div>
        <div class="col-md-6">
          <profile-detail-component></profile-detail-component>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ProfileDetailComponent from '@/components/DetailProfile.vue'
  import ProfileComponent from '@/components/NewProfile.vue'
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
      'profile-detail-component' : ProfileDetailComponent,
      'profile-component' : ProfileComponent
    }
  }
</script>