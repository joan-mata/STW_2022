let options = {
    data: function(){
        return{
            counter : 0,
        }
    },
    created: function () {
        setInterval(() => this.counter++, 100);
    },
    template: '<span> {{counter}} </span>'
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
