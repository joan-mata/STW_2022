let options = { template:
    `<words-to-list words="Lorem ipsum dolor sit amet"></words-to-list>`
}
var app = Vue.createApp(options);

app.component(`words-to-list`,{
    data: function() {
        return {
            str : "",
        }
    },
    props: ['words'],
    template: `<li v-for='item in this.words.split(" ")'>{{item}}</li>`
})

const vm = app.mount('#app')
