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
          return parseFloat(a, 10)+parseFloat(b, 10);
        }
    },
    template: '<input type="text" v-model="a">'
            + '<input type="text" v-model="b">'
            + '<span> {{ sum(a,b) }} <\span>'

}

var app = Vue.createApp(options);
const vm = app.mount('#app')
