let options = {
    data: () => ({ modelVariable: "" }),
    template: `<magic-input v-model="modelVariable"></magic-input>`,
}
var app = Vue.createApp(options);

app.component(`magic-input`, {
    data: function() {
        return {
            box: '',
            propValue : '',
        }
    },
    watch: {
        box : function() {
            this.propValue = this.box.replace(/./g, x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase())
        },
    },
    template:
    `<div>
        <input v-model="box">
        <input v-model="propValue">
        {{propValue}}
    </div>`
})
const vm = app.mount('#app')
