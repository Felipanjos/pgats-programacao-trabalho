export const geradorDeTagsDeIdentificacao = (nome) => {
  return nome.toUpperCase();
};


export function calcularConsumoDeRacao(nome, idade, peso) {
  return (peso * 30) * 10;
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
