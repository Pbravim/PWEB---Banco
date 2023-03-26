class ClienteController {
    inputNome;
    inputCPF;
    inputNumeroConta;
    clientes;
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCPF =
            document.querySelector("#CPF");
        this.inputNumeroConta =
            document.querySelector("#numConta");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        const conta = new Conta(this.inputNumeroConta.value);
        const novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, conta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
