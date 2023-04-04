const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se voce é maior que 18 anos e tem habilitação para saber de voce pode entrar no kart');
console.log('Alem da suas verificações, precisamos verificar se voce esta na lista de horario');

readLine.question('qual o ano do seu nascimento ?', ano=> {
    if (ano >2004 ) {
        console.log('Voce tem 18 anos');
     }else{
        readLine.question('voce tem habilitação?(sim/não)', (temHabilitação) => {
            if(!(temHabilitação.toUpperCase() === "sim")){
                console.log('Voce não tem habilitação para entrar no kart');
            }else{
                readLine.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('bem vindo ao Kart Douglas');
                            break;
                        case "Rafael" :
                            console.log('Bem vindo Rafael'); 
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');


                    }
                });
            }

        })
     }
})


