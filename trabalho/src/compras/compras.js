const calcularTotal = (ferramentas, comprar) => {
    let valorTotal = 0.0;
    let ferramentasDesejadasEncontradas = false;

    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    for (let i = 0; i < ferramentas.length; i++) {
        for (let c = 0; c < comprar.length; c++) {
            if (ferramentas[i].nome === comprar[c]) {
                valorTotal += ferramentas[i].preco;
                ferramentasDesejadasEncontradas = true;
            }
        }
    }

    if (ferramentasDesejadasEncontradas === true) {
        return `O valor a pagar pelas ferramentas (${comprar.join(', ')}) é R$ ${valorTotal.toFixed(2)}`;
    } else {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }
}

module.exports = {
    calcularTotal
}