// Atividade 1
let comando = "3"


switch  (comando)   {


    case  "1":
   
    console.log("Opção 1 escolhida:compra acima de R$200,00; com o desconto de: 10%.");
   
    break;
   
    case   "2":
   
    console.log("Opção 2 escolhida: é dia de promoção, com o desconto de: 15%");
   
    break;
   
    case "3":
   
    console.log("Opção 3 escolhida: cartao fidelidade: que da o desconto de 5% ");
   
    break;
   
    default:
   
    console.log("Opção inválida. Por gentileza, escolha uma opção válida.");
   
    break;
}


// Atividade 2
let idade = 15;
let passouExameTeórico = true;
let passouExamePrático = false;


if (idade >=18) {
    console.log("Você já pode dirigir!");


} else{
    console.log("Você não pode dirigir!");
}
    if (passouExameTeórico = true) {
        console.log("Você Passou no exame teórico!");
 }
 else{
        console.log("Você Não passou :(");  
}
 if (passouExamePrático =! true){
    console.log("Você Passou no exame prático!");
} else {
    console.log("Você Não passou no exame prático!");
}

// Atividade 03
let idade1 = 22;
let temCartãoDeDesconto = true;
let ehFeriado = false;




if (idade1 <=10) {
    console.log("Você pode entrar valor: R$40,00");
} if (idade1>= 60) {
    console.log("Você pode entrar Valor: R$25,00");
} else if (ehFeriado) {
    console.log("Adicional de 20% aplicado");
} else if (temCartãoDeDesconto){
    console.log("descontode 15% aplicado");
   
}
   
// Atividade 04
let idade2=10;
let classificaçãoDoFlime =16;
let acompanhadoPorResponsavel = false
let temIngresso= true


if (!temIngresso) {
    console.log("Você não pode entrar: precisa ter ingresso!");
   
} else {
    if (idade2 >=classificaçãoDoFlime) {
        console.log("Você pode entar!!!!");
       
    } else{
        if (acompanhadoPorResponsavel && idade2 >= classificaçãoDoFlime -3){
            console.log("Você pode entrar com algum responsavel.");
           
        }else{
            console.log("Você não pode entrar, pois não tem idade!");
           
        }
    }
}

// Atividade 5

