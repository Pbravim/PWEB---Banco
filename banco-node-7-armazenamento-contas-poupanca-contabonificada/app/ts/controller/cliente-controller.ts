class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputNumeroConta: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome");
        this.inputCPF =
            <HTMLInputElement>document.querySelector("#CPF");
        this.inputNumeroConta =
            <HTMLInputElement>document.querySelector("#numConta");

        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();

        const conta = new Conta(this.inputNumeroConta.value);
        const novoCliente = new Cliente(this.inputNome.value,this.inputCPF.value, conta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}
