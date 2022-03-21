const bancoDadosProdutos = [
    {
        id: 1,
        categoria: 'Jaqueta',
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
        categoria: 'Jaqueta',
        nome: 'Champion Packable Jacket',
        descricao: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        imagem: '/img/ChampionPackableJacket.png',
        alt: 'Jaqueta preta báscia',
        cifrao: 'R$',
        preco: '100,00',

    }
];

const secaoPrincipal = document.getElementById('secaoPrincipal');
const barraNav = document.getElementById('boxProdutos');

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
            produtosFiltrados('Jaqueta');
        break; 
    }
})

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
    botaoAdicionarCarrinho.classList = 'botaoAdicionarCarrinho'
    botaoAdicionarCarrinho.innerText = 'Adicionar ao carrinho'
    containerinformacaoProduto.appendChild(botaoAdicionarCarrinho);

    secaoPrincipal.appendChild(cardProduto);

}

function montarVitrine(arrProdutos){
    arrProdutos.forEach((produto) => {
        criarCard(produto)
    });
}

function produtosFiltrados(categoriaProduto){
    const bancoDadosFiltrados = bancoDadosProdutos.filter(e => e.categoria === categoriaProduto);   
    montarVitrine(bancoDadosFiltrados);
}






