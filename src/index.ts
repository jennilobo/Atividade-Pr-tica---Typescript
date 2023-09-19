// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
console.log("Questão 1:");

function calcularMediaEStatus(n1: number, n2: number) {
  const media = (n1 + n2) / 2;
  const aprovado = media >= 6;
  return { media, aprovado };
}

const resultadoQuestao1 = calcularMediaEStatus(7, 5);
console.log("Resultado:", resultadoQuestao1);

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / soma dos pesos= Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / soma dos pesos = Resultado
console.log("\nQuestão 2:");

type NotaPeso = {
  nota: number;
  peso: number;
};

function calcularMediaPonderada(notasPesos: NotaPeso[]) {
  let somaNotas = 0;
  let somaPesos = 0;

  for (const np of notasPesos) {
    somaNotas += np.nota * np.peso;
    somaPesos += np.peso;
  }

  return somaNotas / somaPesos;
}

const notasPesos = [{ nota: 7, peso: 0.6 }, { nota: 8, peso: 0.4 }];
const resultadoQuestao2 = calcularMediaPonderada(notasPesos);
console.log("Resultado:", resultadoQuestao2);

// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.
console.log("\nQuestão 3:");

interface Carteira {
  saldo: number;
  transacoes: string[];
}

function criarCarteira(): Carteira {
  return {
    saldo: 0,
    transacoes: [],
  };
}

const carteira = criarCarteira();
console.log("Carteira:", carteira);

function lancarEntrada(carteira: Carteira, valor: number) {
  carteira.saldo += valor;
  carteira.transacoes.push(`Entrada: +${valor}`);
}

lancarEntrada(carteira, 100);
console.log("Carteira após entrada:", carteira);

function lancarSaida(carteira: Carteira, valor: number) {
  if (carteira.saldo < valor) {
    console.error("Erro: Saldo insuficiente para saída.");
    return;
  }

  carteira.saldo -= valor;
  carteira.transacoes.push(`Saída: -${valor}`);
}

lancarSaida(carteira, 50);
console.log("Carteira após saída:", carteira);

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
console.log("\nQuestão 4:");

interface Produto {
  nome: string;
  preco: number;
}

const listaProdutos: Produto[] = [];

function cadastrarProduto(nome: string, preco: number) {
  const produto: Produto = {
    nome,
    preco,
  };
  listaProdutos.push(produto);
  console.log("Produto cadastrado:", produto);
}

cadastrarProduto("Produto 1", 10);
cadastrarProduto("Produto 2", 20);
console.log("Lista de produtos:", listaProdutos);

function excluirProduto(nome: string) {
  const index = listaProdutos.findIndex((produto) => produto.nome === nome);
  if (index !== -1) {
    const produtoExcluido = listaProdutos.splice(index, 1)[0];
    console.log("Produto excluído:", produtoExcluido);
  } else {
    console.error("Erro: Produto não encontrado.");
  }
}

excluirProduto("Produto 1");
console.log("Lista de produtos após exclusão:", listaProdutos);

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
console.log("\nQuestão 5:");

type User = {
  nome: string;
  idade: number;
  ocupacao: string;
  salario?: number;
};

function formatarUsuario(usuario: User) {
  const salario = usuario.salario !== undefined ? `R$ ${usuario.salario}` : 'N/A';
  return `${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${salario}`;
}

const usuario1: User = { nome: "Daphne", idade: 23, ocupacao: "analista de TI", salario: 1000 };
const usuario2: User = { nome: "João", idade: 30, ocupacao: "engenheiro" };

console.log("Usuário 1:", formatarUsuario(usuario1));
console.log("Usuário 2:", formatarUsuario(usuario2));

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
console.log("\nQuestão 6:");

type Diretor = {
  nome: string;
  idade: number;
  salario?: number;
  nivelComissao?: number;
};

function formatarDiretor(diretor: Diretor) {
  const salario = diretor.salario !== undefined ? `R$ ${diretor.salario}` : 'N/A';
  const comissao = diretor.nivelComissao !== undefined ? `, comissão nível ${diretor.nivelComissao}` : '';
  return `Diretor(a) ${diretor.nome}, ${diretor.idade} anos${comissao}, salário ${salario}`;
}

const diretor1: Diretor = { nome: "Alice", idade: 45, nivelComissao: 5 };
const diretor2: Diretor = { nome: "Bob", idade: 50 };

console.log("Diretor 1:", formatarDiretor(diretor1));
console.log("Diretor 2:", formatarDiretor(diretor2));

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
console.log("\nQuestão 7:");

type UserOuDiretor = User | Diretor;

const listaUsuarios: UserOuDiretor[] = [usuario1, usuario2, diretor1, diretor2];

for (const usuario of listaUsuarios) {
  if ('ocupacao' in usuario) {
    console.log("Usuário:", formatarUsuario(usuario));
  } else if ('nivelComissao' in usuario) {
    console.log("Diretor:", formatarDiretor(usuario));
  }
}
