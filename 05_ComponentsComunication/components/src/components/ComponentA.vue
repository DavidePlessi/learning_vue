<template>
    <div>
        <h1>Component AAA</h1>
        <h2>My variable: {{color}}</h2>
        <button @click="reset()">Reset</button>
    </div>
</template>
<script>
    import {eventBus} from "../main";

    export default  {
        name: "ComponentA",
        data() {
            return {
                myVar: 'White'
            }
        },
        props: {
            color: {
                type: String,
                required: true,
                default: 'blue'
            }
        },
        methods: {
            firstChar(n){
                return this.color.substring(0, n)
            },
            reset() {
                this.color = 'Green';
                eventBus.colorChange(this.color);
            }
        }
    }
</script>