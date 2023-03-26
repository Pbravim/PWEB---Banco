class ClienteEspecial extends Cliente {
    private _dependentes: Cliente[];

    constructor(nome: string, cpf: string, conta: Conta, dependentes: Cliente[] = []) {
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }

    get dependentes(): Cliente[] {
        return this._dependentes;
    }

    set dependentes(novoDependentes: Cliente[]) {
        this._dependentes = novoDependentes;
    }

    inserirDependente(dependente: Cliente) {
        this._dependentes.push(dependente);
    }

    removeDependente(dependente: Cliente) {
        const index = this._dependentes.indexOf(dependente);
        if (index !== -1) {
            this._dependentes.splice(index, 1);
        }
    }
}