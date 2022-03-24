const bancoDadosProdutos = [
    {
        id: 1,
        categoria: 'Jaquetas',
        nome: 'Lightweight Jacket',
        descricao: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        imagem: 'img/LightweightJacket.png',
        alt: 'Jaqueta Preta',
        cifrao: 'R$',
        preco: '100,00',
    },

    {
        id: 2,
        categoria: 'Acessórios',
        nome: 'Black Hat',
        descricao: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        imagem: 'img/BlackHat.png',
        alt: 'Gorro preto',
        cifrao: 'R$',
        preco: '100,00',
    },

    {
        id: 3,
        categoria: 'Acessórios',
        nome: 'Mask',
        descricao: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        imagem: 'img/MaskBlack.png.png',
        alt: 'Máscara preta',
        cifrao: 'R$',
        preco: '40,00',
    },

    {
        id: 4,
        categoria: 'Camisetas',
        nome: 'T-Shirt',
        descricao: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        imagem: 'img/T-Shirt.png.png',
        alt: 'Camiseta preta báscia',
        cifrao: 'R$',
        preco: '100,00',
    },

    {
        id: 5,
        categoria: 'Camisetas',
        nome: 'Short-Sleeve T-Shirt',
        descricao: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        imagem: 'img/Short-SleeveT-Shirt.png.png',
        alt: 'Camiseta branca báscia',
        cifrao: 'R$',
        preco: '100,00',
    },

    {
        id: 6,
        categoria: 'Jaquetas',
        nome: 'Champion Packable Jacket',
        descricao: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        imagem: '/img/ChampionPackableJacket.png',
        alt: 'Jaqueta preta báscia',
        cifrao: 'R$',
        preco: '100,00',
    }
];

const bancoDadosCarrinho = [];
let valorTotalProdutos = 0;

const secaoPrincipal = document.getElementById('secaoPrincipal');
const barraNav = document.getElementById('boxProdutos');
const boxCarrinhoCompras = document.getElementById('boxCarrinho');
const botaoPesquisar = document.getElementById('botaoPesquisar');
const inputPesquisar = document.getElementById('pesquisar');
const boxTextosCarrinhoVazio = document.getElementById('boxTextoCarrinho');
const conteudoLateral = document.getElementById('conteudoLateral');

montarVitrine(bancoDadosProdutos);

barraNav.addEventListener('click', function(event){
    const clicouCategoriaId = event.target.id;

    switch(clicouCategoriaId){
        case 'todos':
            secaoPrincipal.innerHTML = "";
            montarVitrine(bancoDadosProdutos);
            break;
        case 'produtoAcessorio':
            secaoPrincipal.innerHTML = "";
            produtosFiltrados('Acessórios');
        break;
        case 'produtoCamiseta':
            secaoPrincipal.innerHTML = "";
            produtosFiltrados('Camisetas');
        break;
        case 'produtoJaqueta':
            secaoPrincipal.innerHTML = "";
            produtosFiltrados('Jaquetas');
        break; 
    }
});

function criarCard(produto){

    const {imagem, alt, categoria, nome, descricao, preco} = produto;

    let cardProduto = document.createElement('div');
    cardProduto.id = 'cardProduto';

    containerImagem = document.createElement('div');
    containerImagem.id = 'containerImagem';
    cardProduto.appendChild(containerImagem);

    let imagemCard = document.createElement('img');
    imagemCard.src = imagem;
    imagemCard.alt = alt
    containerImagem.appendChild(imagemCard)

    let containerinformacaoProduto = document.createElement('div');
    containerinformacaoProduto.id = 'containerInformacaoProduto';
    cardProduto.appendChild(containerinformacaoProduto);

    let nomeProduto = document.createElement('p');
    nomeProduto.classList = 'categoriaProduto';
    nomeProduto.innerText = categoria;
    containerinformacaoProduto.appendChild(nomeProduto)


    let tituloProduto = document.createElement('h2');
    tituloProduto.id = 'tituloProduto';
    tituloProduto.innerText = nome;
    containerinformacaoProduto.appendChild(tituloProduto);

    let descricaoBreve = document.createElement('small');
    descricaoBreve.id = 'descricaoBreve';
    descricaoBreve.innerText = descricao;
    containerinformacaoProduto.appendChild(descricaoBreve);

    let containerPreco = document.createElement('div');
    containerPreco.id = 'containerPreco';
    containerinformacaoProduto.appendChild(containerPreco);

    let cifrao = document.createElement('p');
    cifrao.classList = 'cifrao';
    cifrao.classList = 'valorProduto';
    cifrao.innerText = 'R$';
    containerPreco.appendChild(cifrao);

    let valorProduto = document.createElement('p');
    valorProduto.classList = 'valorProduto';
    valorProduto.innerText = preco;
    containerPreco.appendChild(valorProduto);

    let botaoAdicionarCarrinho = document.createElement('button');
    botaoAdicionarCarrinho.classList = 'botaoAdicionarCarrinho';
    botaoAdicionarCarrinho.innerText = 'Adicionar ao carrinho';
    containerinformacaoProduto.appendChild(botaoAdicionarCarrinho);

    secaoPrincipal.appendChild(cardProduto);
}

function criarMiniCard(produto){
    const {imagem, alt, nome, preco} = produto;

    let containerMiniCardProduto = document.createElement('div');
    containerMiniCardProduto.classList = 'containerMiniCardProduto';
    boxCarrinho.appendChild(containerMiniCardProduto);

    let containerImagemMiniCard = document.createElement('div');
    containerImagemMiniCard.classList = 'containerImagemMiniCard';
    containerMiniCardProduto.appendChild(containerImagemMiniCard);

    let imagemMiniCard = document.createElement('img');
    imagemMiniCard.src = imagem;
    imagemMiniCard.alt = alt;
    imagemMiniCard.classList = 'imagemCarrinho';
    containerImagemMiniCard.appendChild(imagemMiniCard);

    let containerInformarcaoMiniCardProduto = document.createElement('div');
    containerInformarcaoMiniCardProduto.classList = 'containerInformarcaoMiniCardProduto';
    containerMiniCardProduto.appendChild(containerInformarcaoMiniCardProduto);

    let tituloProdutoMiniCard = document.createElement('p');
    tituloProdutoMiniCard.classList = 'tituloProdutoMiniCard'
    tituloProdutoMiniCard.innerText = nome;
    containerInformarcaoMiniCardProduto.appendChild(tituloProdutoMiniCard);

    let containerValorMiniCard = document.createElement('div');
    containerValorMiniCard.id = 'containerValorMiniCard'
    containerInformarcaoMiniCardProduto.appendChild(containerValorMiniCard);

    let cifraoMiniCard = document.createElement('p');
    cifraoMiniCard.classList = 'cifraoMiniCard';
    cifraoMiniCard.innerText = 'R$';
    containerValorMiniCard.appendChild(cifraoMiniCard);

    let valorMiniCard = document.createElement('p');
    valorMiniCard.classList = 'valorMiniCard';
    valorMiniCard.innerText = preco;
    containerValorMiniCard.appendChild(valorMiniCard);

    let removerProduto = document.createElement('button');
    removerProduto.classList = 'removerProduto';
    removerProduto.innerText = 'Remover produto';
    containerInformarcaoMiniCardProduto.appendChild(removerProduto);

}

function montarVitrine(arrProdutos){
    arrProdutos.forEach((produto) => {
        criarCard(produto)
    });
}

function produtosFiltrados(categoriaProduto){
    const bancoDadosFiltrados = bancoDadosProdutos.filter(e => e.categoria === categoriaProduto);   
    montarVitrine(bancoDadosFiltrados);
    /*enviarProdutoCarrinho(bancoDadosFiltrados);*/
}

secaoPrincipal.addEventListener('click', function(event){

    const clicouEnviarCarrinho = event.target.classList
    
    let capturaNome = event.target.parentElement.childNodes[1].innerText

    if(clicouEnviarCarrinho[0] === 'botaoAdicionarCarrinho'){
        bancoDadosCarrinho.push(capturaNome)
        enviarProdutoCarrinho(capturaNome)
        resumoCompra()
    } 
})

botaoPesquisar.addEventListener('click', buscarConteudo);

function buscarConteudo(){
    let pesquisaCapturada = inputPesquisar.value.toLowerCase().trim()

    if(pesquisaCapturada.length > 0) {
        let bancoDadosPesquisar = bancoDadosProdutos.filter(e => e.nome.toLowerCase().includes(pesquisaCapturada) || e.categoria.toLowerCase().includes(pesquisaCapturada));

        secaoPrincipal.innerHTML = "";
        montarVitrine(bancoDadosPesquisar);
    }  
}

function enviarProdutoCarrinho(capturaNome){
    for(let i = 0; i < bancoDadosProdutos.length; i++){
        if(bancoDadosProdutos[i].nome === capturaNome){
            if(bancoDadosCarrinho.length > 0){
                boxTextosCarrinhoVazio.classList.add('apagar')
                criarMiniCard(bancoDadosProdutos[i]);
                valorTotalProdutos += parseInt(bancoDadosProdutos[i].preco);
            } else {
                boxTextosCarrinhoVazio.classList.remove('apagar')
                criarMiniCard(bancoDadosProdutos[i]);
                valorTotalProdutos += parseInt(bancoDadosProdutos[i].preco);
            }
        }
    }    
}

function resumoCompra(){

    if(bancoDadosCarrinho.length === 1){
        const containerBarraLateral = document.getElementById('containerBarraLateral');
    
        let boxValorTotal = document.createElement('div');
        boxValorTotal.id = 'boxValorTotal';
        containerBarraLateral.appendChild(boxValorTotal);
    
        let textoValorTotal = document.createElement('div');
        textoValorTotal.id = 'textoValorTotal';
        boxValorTotal.appendChild(textoValorTotal);
    
        let textoQuantidade = document.createElement('p');
        textoQuantidade.innerText = 'Quantidade';
        textoValorTotal.appendChild(textoQuantidade);
    
        let textoTotal = document.createElement('p');
        textoTotal.id = 'quantidadeProdutos';
        textoTotal.innerText = 'Total';
        textoValorTotal.appendChild(textoTotal);
    
        let containerValorTotal = document.createElement('div');
        containerValorTotal.id = 'containerValorTotal';
        boxValorTotal.appendChild(containerValorTotal);
    
        let quantidade0 = document.createElement('p');
        quantidade0.classList.add('textoValores');
        quantidade0.classList.add('quantidadeProdutoResumo')
        quantidade0.innerText = bancoDadosCarrinho.length
        containerValorTotal.appendChild(quantidade0);
    
        let containerPreco = document.createElement('div');
        containerPreco.id = 'containerPrecoProduto';
        containerValorTotal.appendChild(containerPreco);
    
        let textoValor = document.createElement('p');
        textoValor.classList.add('textoValores');
        textoValor.classList.add('valorDinheiro'); 
        textoValor.innerText = '0,00';
        containerPreco.appendChild(textoValor);
    
        let finalizarCompra = document.createElement('div');
        finalizarCompra.id = 'finalizarCompra';
        containerBarraLateral.appendChild(finalizarCompra);
    
        let botaoFinalizarCompra = document.createElement('button');
        botaoFinalizarCompra.id = 'botaoFinalizarCompra';
        botaoFinalizarCompra.type = 'submit';
        botaoFinalizarCompra.innerText = 'Finalizar Compra';
        finalizarCompra.appendChild(botaoFinalizarCompra);

    }
    if(bancoDadosCarrinho.length >= 1) {
        document.querySelector('#containerValorTotal p').innerText = bancoDadosCarrinho.length
        document.querySelector('#containerPrecoProduto p').innerText = `R$ ${valorTotalProdutos}`
    }

}

conteudoLateral.addEventListener('click', function(event){
    
    let arrTodosProdutosCarrinho = document.querySelectorAll('.containerMiniCardProduto')
    
    let clicouRemover = event.target.closest('.containerMiniCardProduto')

    let posicaoProduto 
    
    arrTodosProdutosCarrinho.forEach((item, index) => {
        if(item === clicouRemover){
            posicaoProduto = index
        }
    })

    bancoDadosCarrinho.forEach((item, index) => {
       if(clicouRemover.children[1].children[0].innerText === item && index === posicaoProduto){
            for(let i = 0; i < bancoDadosProdutos.length; i++){
                if(bancoDadosProdutos[i].nome === item){
                    valorTotalProdutos -= parseInt(bancoDadosProdutos[i].preco)
                }
            }
            bancoDadosCarrinho.splice(index,1)
       }
    })

    clicouRemover.remove()
    document.querySelector('.quantidadeProdutoResumo').innerText = bancoDadosCarrinho.length
    document.querySelector('.valorDinheiro').innerText = `R$ ${valorTotalProdutos}`

    if(bancoDadosCarrinho.length === 0){
        boxTextosCarrinhoVazio.classList.remove('apagar')
        document.querySelector('#boxValorTotal').remove()
        document.querySelector('#botaoFinalizarCompra').remove()
    }

})

