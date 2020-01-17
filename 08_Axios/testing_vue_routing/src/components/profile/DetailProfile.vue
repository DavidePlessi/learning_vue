<template>
    <div>
        <h4>Il mio Profilo ID: {{id}}
            QUERY: {{$route.query.admin}} | {{$route.query.qu}}</h4>
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
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to){
                this.id = to.params.id;
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