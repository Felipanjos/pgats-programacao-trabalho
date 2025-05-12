export const geradorDeTagsDeIdentificacao = (nome) => {
  return nome.toUpperCase();
};


export function calcularConsumoDeRacao(nome, idade, peso) {
  return (peso * 30) * 10;
}

export async function buscarDadoAsync() {
  return await 'Pipoca';
}
