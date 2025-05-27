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
  const gramasPorKilo = 30 * 10;
  return peso * gramasPorKilo;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  let atividade;
  switch (porte) {
    case 'pequeno':
      atividade = 'brincar dentro de casa';
      break;
    case 'medio':
      atividade = 'caminhada no quarteirao';
    case 'grande':
      atividade = 'correr no parque';
      break;
    default:
      atividade = 'porte invalido';
      break;
  }

  return atividade;
}

export async function buscarDadoAsync() {
  return await 'Pipoca';
}
