<template>
    <div>
        <h4>Il mio Profilo</h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Nome : </b>{{ getNome }}</li>
            <li class="list-group-item"><b>getNameSettings : </b></li>
            <li class="list-group-item"><b>Cognome : </b>mio Cognome</li>
            <li class="list-group-item"><b>Email : </b>{{ getEmail }}</li>
        </ul>
    </div>
</template>



<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'ProfileDetailComponent',
        data (){
            return {
            }
        },
        created(){
        },
        computed: {
            ...mapGetters({
                'getNome': 'profile/getNome',
                'getNomeSettings': 'settings/getNome',
                'getEmail': 'profile/getEmail'
            })
        },
        methods : {
        },
        props: {
        }
    }
</script>