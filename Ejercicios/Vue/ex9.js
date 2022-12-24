let options = {
    data: function() {
        return {
            redLight: {
                'height': '30px',
                'background-color': 'indianRed',
            },
            yellowLight: {
                'height': '30px',
                'background-color': 'khaki',
            },
            greenLight: {
                'height': '30px',
                'background-color': 'green',
            },
            state: 0,
        }
    },
    methods: {
        change:function() {
            this.state  =this.state + 1;
            if (this.state > 2) {
                this.state = 0;
            }
        }
    },
    watch: {
        state: function(state) {
            if (this.state == 0) {
                this.redLight= {
                    'height': '30px',
                    'background-color': 'indianRed',
                };
                this.greenLight= {
                    'height': '30px',
                    'background-color': 'green',
                };
            }
            else if (this.state == 1) {
                
                this.yellowLight= {
                    'height': '30px',
                    'background-color': 'yellow',
                };
                this.greenLight= {
                    'height': '30px',
                    'background-color': 'seagreen',
                };
            }
            else {
                
                this.redLight= {
                    'height': '30px',
                    'background-color': 'red',
                };
                this.yellowLight= {
                    'height': '30px',
                    'background-color': 'khaki',
                };
            }
        }
    },
    template:
    `<div style="display: inline-block; width:30px;">
          <div v-bind:style="redLight"></div>
          <div v-bind:style="yellowLight"></div>
          <div v-bind:style="greenLight"></div>
        <button v-on:click="change()">switch</button>
    </div>`,
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
