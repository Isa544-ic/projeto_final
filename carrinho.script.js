// Função para atualizar o preço total de cada produto baseado na quantidade
function atualizarPrecoTotal(produtoLinha) {
    const quantidade = produtoLinha.querySelector('.quantidade').value;
    const precoUnitario = parseFloat(produtoLinha.querySelector('.preco-unitario').innerText.replace('R$', '').replace(',', '.'));
    const precoTotal = quantidade * precoUnitario;

    // Atualiza o valor total do produto na linha
    produtoLinha.querySelector('.preco-total').innerText = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
}

// Função para calcular o total final do carrinho
function calcularTotalFinal() {
    let totalFinal = 0;
    const produtos = document.querySelectorAll('tbody tr');

    produtos.forEach(produtoLinha => {
        const precoTotal = parseFloat(produtoLinha.querySelector('.preco-total').innerText.replace('R$', '').replace(',', '.'));
        totalFinal += precoTotal;
    });

    // Atualiza o valor total final no HTML
    document.getElementById('total-final').innerText = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
}

// Função para remover um produto do carrinho
function removerProduto(produtoLinha) {
    produtoLinha.remove();
    calcularTotalFinal(); // Recalcula o total final após remoção
}

// Delegação de eventos para alterar a quantidade e recalcular o total
document.body.addEventListener('input', function(event) {
    if (event.target && event.target.classList.contains('quantidade')) {
        const produtoLinha = event.target.closest('tr'); // Seleciona a linha correspondente
        atualizarPrecoTotal(produtoLinha); // Atualiza o total do produto
        calcularTotalFinal(); // Recalcula o total final
    }
});

// Delegação de eventos para remover produtos
document.body.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('remover-produto')) {
        const produtoLinha = event.target.closest('tr'); // Seleciona a linha correspondente
        removerProduto(produtoLinha); // Remove o produto
    }
});

// Calcula o total inicial na página carregada
calcularTotalFinal();

