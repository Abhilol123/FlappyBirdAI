class NN {
    constructor(no_inp_nodes, no_ans_nodes, no_hidden_layers, no_hidden_nodes) {
        this.no_inp_nodes = no_inp_nodes;
        this.no_ans_nodes = no_ans_nodes;
        this.no_hidden_layers = no_hidden_layers;
        this.no_hidden_nodes = no_hidden_nodes;

        let temp;
        this.layers = [];
        temp = new Matrix(this.no_inp_nodes, 1);
        this.layers.push(temp);
        for (let i = 0; i < this.no_hidden_layers; i++)  {
            temp = new Matrix(this.no_hidden_nodes[i], 1);
            this.layers.push(temp);
        }
        temp = new Matrix(this.no_ans_nodes, 1);
        this.layers.push(temp);

        this.weights = [];
        for (let i = 0; i < this.layers.length-1; i++)    {
            this.weights.push(new Matrix(this.layers[i + 1].rows, this.layers[i].rows))
        }

        this.bias = [];
        for(let i = 0; i < this.layers.length - 1; i++) {
            this.bias.push(new Matrix(this.layers[i + 1].rows, 1))
        }
    }
}
