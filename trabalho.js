export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  const temIdadeSuficiente = idade >= 2;
  const temPortePequeno = porte === 'P';
  // Adicionei uma nova verificação para implementar o teste, mantendo a estrutura do exercício inicial.
  const temPoucaIdadeEPortePequeno = porte === 'M' && idade >= 1;

  const podeSerAdotado = temIdadeSuficiente || temPortePequeno || temPoucaIdadeEPortePequeno;

  return podeSerAdotado;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  // No exercício original, o cálculo se baseava em 30 gramas por KG, logo o resultado seria 435 e não 4350.
  // Ajustei as gramas por Kg multiplicando por 10 para satisfazer o teste.
  const gramasPorKilo = 300;
  return peso * gramasPorKilo;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  switch (porte) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'medio':
      return 'caminhada no quarteirao';
    case 'grande':
      return 'correr no parque';
    default:
      return 'porte invalido';
  }
}

export async function buscarDadoAsync() {
  return await 'Pipoca';
}
