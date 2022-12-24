const Calculator = {
  data: function() {
    return {
        variable: 0,
        variable1: 0,
        variable2: 0,
        variable3: 0,
        variable4: 0,
        i: 1,
    }
  },
methods: {
    sum: function() {
        switch(this.i) {
            case 3:
                this.variable1 += this.variable2;
                this.variable2 = 0;
                this.i -= 1;
            break;
            case 4:
                this.variable2 += this.variable3;
                this.variable3 = 0;
                this.i -= 1;
            break;
            case 5:
                this.variable3 += this.variable4;
                this.variable4 = 0;
                this.i -= 1;
            break;
        }
    },
    res: function() {
        switch(this.i) {
            case 3:
                this.variable1 -= this.variable2;
                this.variable2 = 0;
                this.i -= 1;
            break;
            case 4:
                this.variable2 -= this.variable3;
                this.variable3 = 0;
                this.i -= 1;
            break;
            case 5:
                this.variable3 -= this.variable4;
                this.variable4 = 0;
                this.i -= 1;
            break;
        }
    },
    mul: function() {
        switch(this.i) {
            case 3:
                this.variable1 *= this.variable2;
                this.variable2 = 0;
                this.i -= 1;
            break;
            case 4:
                this.variable2 *= this.variable3;
                this.variable3 = 0;
                this.i -= 1;
            break;
            case 5:
                this.variable3 *= this.variable4;
                this.variable4 = 0;
                this.i -= 1;
            break;
        }
    },
    div: function() {
        switch(this.i) {
            case 3:
                this.variable1 /= this.variable2;
                this.variable2 = 0;
                this.i -= 1;
            break;
            case 4:
                this.variable2 /= this.variable3;
                this.variable3 = 0;
                this.i -= 1;
            break;
            case 5:
                this.variable3 /= this.variable4;
                this.variable4 = 0;
                this.i -= 1;
            break;
        }
    },
    change: function() {
        switch(this.i) {
            case 2:
                this.variable1 *= -1;
            break;
            case 3:
                this.variable2 *= -1;
            break;
            case 4:
                this.variable3 *= -1;
            break;
            case 5:
                this.variable4 *= -1;
            break;
        }
    },
    swap: function() {
        switch(this.i) {
            case 3:
                aux = this.variable1;
                this.variable1 = this.variable2;
                this.variable2 = aux;
            break;
            case 4:
                aux = this.variable2;
                this.variable2 = this.variable3;
                this.variable3 = aux;
            break;
            case 5:
                aux = this.variable4;
                this.variable4 = this.variable3;
                this.variable3 = aux;
            break;
        }
    },
    stackPlus: function(variable) {
        switch(this.i) {
            case 1:
                this.variable1 = variable;
                this.i += 1;
            break;
            case 2:
                this.variable2 = variable;
                this.i += 1;
            break;
            case 3:
                this.variable3 = variable;
                this.i += 1;
            break;
            case 4:
                this.variable4 = variable;
                this.i += 1;
            break;
        }
    },
    stackSub: function() {
        switch(this.i) {
            case 2:
                this.variable1 = 0;
                this.i -= 1;
            break;
            case 3:
                this.variable2 = 0;
                this.i -= 1;
            break;
            case 4:
                this.variable3 = 0;
                this.i -= 1;
            break;
            case 5:
                this.variable4 = 0;
                this.i -= 1;
            break;
        }
    }
},
  template: `
  <!-- TODO -->
  <input type="number" v-model="variable">
  <div>{{variable4}}</div>
  <div>{{variable3}}</div>
  <div>{{variable2}}</div>
  <div>{{variable1}}</div>
  <button v-on:click="this.sum">+</button>
  <button v-on:click="this.res">-</button>
  <button v-on:click="this.mul">*</button>
  <button v-on:click="this.div">/</button>
  <button v-on:click="this.change">+/-</button>
  <button v-on:click="this.swap">swap</button>
  <button v-on:click="this.stackPlus(variable)">stack+</button>
  <button v-on:click="this.stackSub">stack-</button>
  `
};
