<template>
    <div>
        <div class="card" style="width: 18rem;">
            <div class="card-header">Inserisci i dati</div>
            <div class="card-body">
                <div class="list-group">
                    <label>Nome: </label>
                    <input type="text" v-model="profile.nome" name="nome"/>
                    <label>Cognome: </label>
                    <input type="text" v-model="profile.cognome" name="cognome"/>
                    <label>Email: </label>
                    <input type="text" v-model="profile.email" name="email"/>
                </div>
                <hr>
                <a href="#" class="btn btn-primary" @click="invia()">Salva</a>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex';

    export default {
        name: 'ProfileComponent',
        data() {
            return {
                profile: {
                    nome : '',
                    cognome: '',
                    email: '',
                }
            }
        },
        computed: {
            ...mapGetters('profile', [
                "getNome"
            ])
        },
        methods: {
            ...mapMutations([
                'setNome'
            ]),
            ...mapActions('profile', [
                "setProfile"
            ]),
            // ...mapActions('profile',[
            //     'actionProfile'
            // ]),
            invia() {
                console.log(this.profile.nome);
                this.setProfile(this.profile);
                this.$router.push('/profile');
                //this.$store.commit('setName','Roberto');
                //this.actionProfile(this.profile);
            }
        },
    }
</script>