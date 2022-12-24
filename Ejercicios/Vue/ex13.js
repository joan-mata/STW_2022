let options = {
    data: () => ({ state: null }),
        template: `<div><switch-button
        v-on:on="state='just turned on'"
        v-on:off="state='just turned off'">
        </switch-button>{{state}}</div>`,
}
var app = Vue.createApp(options);

app.component(`switch-button`, {
    data: function() {
        return {
            state : '',
            styleClass : {
                'border' : 'solid',
                'display' : 'inline-block',
            },
            flagOFF: false,
            flagON: false,
        }
    },
    methods: {
        on: function() {
            this.$emit('on');
            this.flagON = true;
            this.flagOFF = false;
        },
        off: function() {
            this.$emit('off');
            this.flagOFF = true;
            this.flagON = false;
        }
    },
    template:
    `<div v-bind:style=styleClass>
        <button v-on:click="on()" v-if="flagON" disabled>ON</button>
        <button v-on:click="on()" v-if="!flagON">ON</button>
        <button v-on:click="off()" v-if="flagOFF" disabled>OFF</button>
        <button v-on:click="off()" v-if="!flagOFF">OFF</button>
    
    </div>`
})
const vm = app.mount('#app')
