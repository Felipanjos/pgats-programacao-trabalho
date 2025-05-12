export const geradorDeTagsDeIdentificacao = (nome) => {
  return nome.toUpperCase();
};

export function verificarSePodeSerAdotado(idade, porte) {
  const IDADE_MINIMA = 2;

  const podeSerAdotado =
    porte === 'P' ||
    (porte === 'M' && idade >= 1) ||
    idade >= IDADE_MINIMA;

  return podeSerAdotado;
}

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
