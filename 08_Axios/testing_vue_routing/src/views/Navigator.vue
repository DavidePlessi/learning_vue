<template>
    <div id="nav">
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/profile/new">Inserisci dati</router-link>

<!--      <div class="btn-group dropleft" style="float:right">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          MENU
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link tag="li"
                       class="dropdown-item"
                       active-class="active"
                       to="/"
                       exact>
            Home
          </router-link>
          <router-link tag="li"
                       class="dropdown-item"
                       active-class="active"
                       to="/profile"
                       exact>
            Profile
          </router-link>
          <router-link tag="li"
                       class="dropdown-item"
                       active-class="active"
                       to="/profile/4"
                       exact>
            Profile 4
          </router-link>
          <router-link tag="li"
                       class="dropdown-item"
                       active-class="active"
                       to="/profile-new"
                       exact>
            Inserisci dati
          </router-link>
        </div>
      </div>-->
    </div>
</template>

<script>
    export default {
        name: 'navigator'
    }
</script>