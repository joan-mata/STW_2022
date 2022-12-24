let options = {
    data: function() {
        return {
            box: ''
        }
    },
    watch: {
        box: function() {
            if (this.box.length > 4) {
                this.box = '';
            }
        }
    },
    template: '<input type="text" v-model="box">'
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
