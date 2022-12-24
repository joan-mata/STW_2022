let options = {
    data: function() {
        return {
            box: 0
        }
    },
    watch: {
        box: function() {
            if (this.box > 9999) {
                this.box = 0;
            }
        }
    },
    template: '<input type="number" v-model="box">'
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
