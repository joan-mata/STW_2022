let options = {
    data: function() {
        var variable = {
            a : 0,
            b : 0
        }
        return variable
    },
    methods: {
        sum: function(a, b) {
          return a+b;
        }
    },
    template: '<input type="number" v-model="a">'
            + '<input type="number" v-model="b">'
            + '<span> {{ sum(a,b) }} <\span>'

}

var app = Vue.createApp(options);
const vm = app.mount('#app')
