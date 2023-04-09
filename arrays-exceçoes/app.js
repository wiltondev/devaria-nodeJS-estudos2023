try{

    
    const  listaDeProdutosDisponiveis  =  [
        "Pão" ,
        "Leite" ,
    "Café" ,
    "Laranja" ,
    "Macarrão" ,
    "Sabonete" ,
    "Detergente" ,
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
    return listaDeArgumentos.find(argumento => argumento === produto);
})

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));

const lidtaDeProdutosSolicitadosNãoDisponiveis = listaDeArgumentos.filter(argumento=>{
    return !listaDeProdutosDisponiveis.find(produto=> produto ===argumento);
})
lidtaDeProdutosSolicitadosNãoDisponiveis.forEach(argumento=> console.log(`Este produto nos não temos: ${argumento}`));

const listadeProdutosOrdenados = listaDeProdutosDisponiveis.sort();
listadeProdutosOrdenados.forEach(produto => console.log(`este produto esta disponivel: ${produto}`));

}catch(e){
    console.log('Não foi possível executar pedido de compra.')
}