let options = {
    data: function() {
        return {
            phone: [
                { name: 'Jaime Sommers', phone: '311-555-2368' },
                { name: 'Ghostbusters', phone: '555-2368' },
                { name: 'Mr. Plow', phone: '636-555-3226' },
                { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
                { name: 'The A-Team', phone: '555-6162' },
            ],
            tableClass: { 'border -collapse' : 'collapse'},
            trThClass: {'border': '1px solid black'}
        }
    },
    methods: {
        del: function(index) {
            this.phone.splice(index, 1);
        }
    },
    template: `
    <table v-bind:style="tableClass"><tr v-bind:style="trThClass"><th v-bind:style="trThClass">Name</th><th v-bind:style="trThClass">Phone number</th><th v-bind:style="trThClass"></th></tr>
    <tr v-for='(item, index) in phone' v-bind:style="trThClass"><td v-bind:style="trThClass">{{item.name}}</td><td v-bind:style="trThClass">{{item.phone}}</td><td v-bind:style="trThClass"><button v-on:click="del(index)">delete</button></td></tr>
    </table>`
}

var app = Vue.createApp(options);
const vm = app.mount('#app')
