let options = {
    data: function() {
        return {
            box: {
                'background-color' : 'white'
            }
        }
    },
    methods: {
        red: function() {
            this.box = {
                'background-color' : 'red'
            }
        },
        white: function() {
            this.box = {
                'background-color' : 'white'
            }
        }
    },
    template: '<input type="text" v-bind:style="box" v-on:keydown="red()" v-on:keyup="white()">'
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
