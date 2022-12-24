let options = {
    data: function() {
        return {
            button: 'Click me!'
        }
    },
    methods: {
        del: function() {
            if (this.button) {
                this.button = this.button.slice(0,0);
            }
        }
    },
    template: `<button v-if="button!=''" v-on:click="del()">{{button}}</button>`
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
