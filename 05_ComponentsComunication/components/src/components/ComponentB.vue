<template>
    <div>
        <h1>Component BBB</h1>
        <h2>My variable: {{color}}</h2>
    </div>
</template>
<script>
    import {eventBus} from "../main";

    export default  {
        name: "ComponentB",
        created() {
            eventBus.$on('colorChange', (v) => this.color = v)
        },
        data() {
            return {
                myVar: 'Black'
            }
        },
        props: {
            color: String
        }
    }
</script>