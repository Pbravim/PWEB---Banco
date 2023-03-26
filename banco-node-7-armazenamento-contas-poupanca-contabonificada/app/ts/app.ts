let contaController = new ContaController();
let clienteController = new ClienteController;
const clientes = new Clientes();

contaController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 1100);
const c3 = new Conta('3', 11100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const cl1 = new Cliente("Marcos", "123456789",c1);
console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);



const cliente1 = new Cliente("Fulano", "111.111.111-11", c1);
const cliente2 = new Cliente("Ciclano", "222.222.222-22", c2);
const cliente3 = new Cliente("Beltrano", "333.333.333-33", c3);

clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

console.log(clientes.listar());

clientes.remover("222.222.222-22");

console.log(clientes.listar());

console.log(clientes.pesquisar("111.111.111-11"));
