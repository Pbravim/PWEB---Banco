class ClienteEspecial extends Cliente {
    _dependentes;
    constructor(nome, cpf, conta, dependentes = []) {
        super(nome, cpf, conta);
        this._dependentes = dependentes;
    }
    get dependentes() {
        return this._dependentes;
    }
    set dependentes(novoDependentes) {
        this._dependentes = novoDependentes;
    }
    inserirDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removeDependente(dependente) {
        const index = this._dependentes.indexOf(dependente);
        if (index !== -1) {
            this._dependentes.splice(index, 1);
        }
    }
}
