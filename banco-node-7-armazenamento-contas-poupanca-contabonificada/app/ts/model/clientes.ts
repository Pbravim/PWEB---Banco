class Clientes{
    private _clientes: Cliente[];

    constructor() {
        this._clientes = [];
    }


    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteRemove = this.pesquisar(cpf);
        if (clienteRemove) {
            const indiceCliente = this._clientes.indexOf(clienteRemove);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        const clienteProcurar = this._clientes.find(cliente => cliente.cpf === cpf);
        if (clienteProcurar === undefined)
            console.log("Cliente não encontrado");
        return clienteProcurar;
    }

    listar(): Cliente[] {
        return this._clientes;
    }

}