let options = {
    data: () => ({ color: null }),
    template:
    `<div style="border:solid red; display:flex;">
        <color-selector v-on:color="color = $event"></color-selector>
        <div v-bind:style="'color:' + color">TEXT</div>
    </div>`,
}
var app = Vue.createApp(options);

app.component(`color-selector`, {
    data: function() {
        return {
            redValue : 0,
            greenValue : 0,
            blueValue : 0,
            styleColor :  0,
            StyleDiv1 : {
                'background-color' : '#000',
                'width' : '110px',
                'height' : '110px',
            },
            StyleDiv2 : {
                'display' : 'flex',
                'flex-direction' : 'column',
                'padding' : '10px',
            },
        }
    },
    watch: {
        redValue : function(){
           this.styleColor= "rgb("+this.redValue+","+this.greenValue+","+this.blueValue+")";
           this.StyleDiv1 = {
               'background-color': this.styleColor,
               'width':'110px',
               'height':'110px',
           };
           this.$emit('color',this.styleColor);
        },
        greenValue : function(){
           this.styleColor= "rgb("+this.redValue+","+this.greenValue+","+this.blueValue+")";
           this.StyleDiv1 = {
               'background-color': this.styleColor,
               'width':'110px',
               'height':'110px',
           };
           this.$emit('color',this.styleColor);
        },
        blueValue : function(){
           this.styleColor= "rgb("+this.redValue+","+this.greenValue+","+this.blueValue+")";
           this.StyleDiv1 = {
               'background-color': this.styleColor,
               'width':'110px',
               'height':'110px',
           };
           this.$emit('color',this.styleColor);
        },
    },
    template:
    `<div style="border:solid; display:flex;">
        <div v-bind:style="StyleDiv1"></div>
        <div v-bind:style="StyleDiv2">
            <div>R: <input type="range" min=0 max=255 v-model="redValue"> {{redValue}} </div>
            <div>G: <input type="range" min=0 max=255 v-model="greenValue"> {{greenValue}} </div>
            <div>B: <input type="range" min=0 max=255 v-model="blueValue"> {{blueValue}} </div>
        </div>
    </div>`
})
const vm = app.mount('#app')
