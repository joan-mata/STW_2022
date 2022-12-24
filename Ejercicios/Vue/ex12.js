let options = {
    data: function() {
        return {
          person: {
            name: 'My Name',
            picture: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM82Mz1HwAFqgJP3gasfwAAAABJRU5ErkJggg==`,
            email: 'me@somerandomdomain.com',
            phone: '+00 00 000 0000',
          },
        }
    },
    template: `<div style="display:flex;">
               <card v-bind:personalData="person"></card>
             </div>`,
}
var app = Vue.createApp(options);

app.component(`card`,{
    data: function() {
        return {
            ClassCard : {
                'font-family': 'Roboto',
                'text-align': 'center',
                'background': '#ffbcbc',
                'box-shadow': '6px 6px 8px #888',
                'margin': '15px',
            },
            cardDiv : {
                'padding' : '10px',
            },
            cardImg : {
                'width' : '100px',
            }
        }
    },
    props: ['personalData'],
    template:
    `<div v-bind:style="ClassCard">
        <div>
            <img v-bind:style="cardImg" src={{this.personalData.picture}}>
        </div>
          <div v-bind:style="cardDiv"><h1>{{this.personalData.name}}</h1></div>
          <div v-bind:style="cardDiv">{{this.personalData.email}}</div>
          <div v-bind:style="cardDiv">{{this.personalData.phone}}</div>
    </div>`
})
const vm = app.mount('#app')
