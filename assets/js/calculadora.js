function calculadora(){
    const operacao = Number(prompt("Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)"));
    console.log(operacao);

    if(!operacao || operacao < 1 || operacao > 6){
        alert("Erro: Operação Inválida!");
        calculadora();
    } else {
        let p1 = Number(prompt("Insira o primeiro valor:"));
        let p2 = Number(prompt("Insira segundo valor:"));
        let resultado = 0;

        if(!p1 || !p2){
            alert("Erro: Parâmetros Inválidos!");
            calculadora();
        } else {
            function soma(){
                resultado = p1 + p2;
                console.log(resultado);
                alert(`${p1} + ${p2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = p1 - p2;
                console.log(resultado);
                alert(`${p1} - ${p2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = p1 * p2;
                console.log(resultado);
                alert(`${p1} * ${p2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal(){
                resultado = p1 / p2;
                console.log(resultado);
                alert(`${p1} / ${p2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = p1 % p2;
                console.log(resultado);
                alert(`${p1} % ${p2} = ${resultado}`);
                novaOperacao();
            }
            function potenciacao(){
                resultado = p1 ** p2;
                console.log(resultado);
                alert(`${p1} ** ${p2} = ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao(){
                let opcao = Number(prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não"));
                if(opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert("Até mais");
                } else {
                    alert("Digite uma opção válida!");
                    novaOperacao();
                }
            }
            
    
          /*  if (operacao == 1){
                soma();
            } else if (operacao == 2){
                subtracao();
            } else if (operacao == 3){
                multiplicacao();
            } else if (operacao == 4){
                divisaoReal();
            } else if (operacao == 5){
                divisaoInteira();
            } else if (operacao == 6){
                potenciacao();
            } */

            switch(operacao){
                case 1: soma(); break;
                case 2: subtracao(); break;
                case 3: multiplicacao(); break;
                case 4: divisaoReal(); break;
                case 5: divisaoInteira(); break;
                case 6: potenciacao(); break;
            }
        }
    }
}

calculadora();