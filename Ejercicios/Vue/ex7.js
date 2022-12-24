let options = {
    data: function() {
        return {
            a: false,
            b: false,
            c: false,
            d: false,
        }
    },
    watch: {
        a:function() {
            this.b = this.a
        },
        b:function() {
            this.c = this.b
        },
        c:function() {
            this.d = this.c
        },
    },
    template: '<input type=checkbox v-model="a"> {{a}} {{b}} {{c}} {{d}}'
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
