let options = {
    data: function() {
        return {
            flag : false,
            value : 0,
            object : {'color' : 'hsl(0,0%,50%)', }
        }
    },
    watch: {
        value: function(value) {
            this.object = {
                'color' : 'hsl(0,'+value+'%,50%)',
            }
            if (value < 70) {
                this.flag = false;
            }
            else {
                this.flag = true;
            }
        }
    },
    template: `<div>
        <div v-bind:style="object"> AM I RED? </div>
        <input type="range" min="0" max="100" v-model="value">
        <div v-if="flag">YES!</div>
        </div>`
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
