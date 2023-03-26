class Clientes {
    _clientes;
    constructor() {
        this._clientes = [];
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const clienteRemove = this.pesquisar(cpf);
        if (clienteRemove) {
            const indiceCliente = this._clientes.indexOf(clienteRemove);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        const clienteProcurar = this._clientes.find(cliente => cliente.cpf === cpf);
        if (clienteProcurar === undefined)
            console.log("Cliente não encontrado");
        return clienteProcurar;
    }
    listar() {
        return this._clientes;
    }
}
