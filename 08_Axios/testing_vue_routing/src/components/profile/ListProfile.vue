<template>
    <div>
        <h1>Profile list</h1>

        <div v-for="user in users" :key="user.id">
            <router-link tag="li"
                         class="dropdown-item"
                         active-class="active"
                         :to="{name: 'detailProfile', params: { id: user.id},
                            query: {admin: true, qu: 10}}"
                         exact>
                {{user.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListProfile',
        data() {
            return {
                users: [
                    {id: 1, name: 'Aldo'},
                    {id: 2, name: 'Giovanni'},
                    {id: 3, name: 'Giacomo'}
                ],
                leaveConfirmed: false
            }
        },
        beforeRouteEnter(to, from, next){
            console.log('Entering list profile!');
            next();
        },
        beforeRouteLeave(to, from, next){
            if(this.leaveConfirmed){
                next();
            } else {
                if(confirm('Sicuro di voler uscire ?')){
                    next();
                }
            }
            console.log('Leaving list profile!');
        }

    }
</script>