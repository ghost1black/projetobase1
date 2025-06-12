/*var x=32;
var y=13;
let som= x+y
console.log("a soma é:" +som)
console.log("---------------------------------------")
var t=21;
var f=5;
let mult= t*f
console.log("a multiplição é:" +mult)
console.log("---------------------------------------")
var x=87;
var y=32;
let div= x/y
console.log("a divisão é:" +div)
console.log("---------------------------------------")
var x=87;
var y=32;
let sub= x-y
console.log("a sulbtração é:" +sub)
let nome= "vitoria";
let salario= 750/12;
let mesestrab= salario *8
console.log (nome+ " seu salario final é:" +salario) 
salario = 500
quinze = 15/100*salario+salario
dez = 10/100*salario+salario
cinco = 5/100*salario+salario*
let idade = prompt("digite aqui sua idade")
if(idade<12){
    alert("Assiste conteúdo infantil")
}
else if (idade=12 && idade <=17)
alert("Assista contúdo teen")

else if (idade>=28 && idade>60){
   alert("Assista contúdo adulto")
}
else{
    alert ("Assista contúdo sénioe")
}
 let ponto = prompt("digite aqui a sua ponto")
 if (Ponto<=100){
    alert("Seu Nivel é Novato!! Bónus de +100EXP")
 }
else if(ponto>=1001 && ponto<=500){
     alert("Seu Nivel é Aptendiz!! Bónus de +500XP")
}
 else if(ponto>=5001 && ponto>=10000)
  alert("Seu NIvel é Expert!! Bónus de +1000XP")

    else{
      alert("Seu NIvel é mestre!! Bónus de +2000XP")
    } 
  
let basico = 25;
let premium = 40;
let ultra = 60;
let preco1 = 5;
let preco2 = 7.5;
let preco3 = 10;

let assinatura = prompt("Qual seu tipo de assinatura?");
let telas = prompt("Quantas telas simultâneas");

if (assinatura == 'basico') {
    if (telas > 1 && telas < 3) {
        alert("Seu plano irá custar R$ " + (basico + preco1));
    } else if (telas >= 3 && telas < 4) {
        alert("Seu plano irá custar R$ " + (basico + preco2));
    } else if (telas >= 4) {
        alert("Seu plano irá custar R$ " + (basico + preco3));
    }
}

else if (assinatura == 'premium') {
    if (telas > 1 && telas < 3) {
        alert("Seu plano irá custar R$ " + (premium + preco1));
    } else if (telas >= 3 && telas < 4) {
        alert("Seu plano irá custar R$ " + (premium + preco2));
    } else if (telas >= 4) {
        alert("Seu plano irá custar R$ " + (premium + preco3));
    }
}

else if (assinatura == 'ultra') {
    if (telas > 1 && telas < 3) {
        alert("Seu plano irá custar R$ " + (ultra + preco1));
    } else if (telas >= 3 && telas < 4) {
        alert("Seu plano irá custar R$ " + (ultra + preco2));
    } else if (telas >= 4) {
        alert("Seu plano irá custar R$ " + (ultra + preco3));
        let basico = 25;
let premium = 40;
let ultra = 60;
let preco1 = 5;
let preco2 = 7.5;
let preco3 = 10;

let assinatura = prompt("Qual seu tipo de assinatura?");
let telas = prompt("Quantas telas simultâneas");

if (assinatura == 'basico') {
    if (telas > 1 && telas < 3) {
        alert("Seu plano irá custar R$ " + (basico + preco1));
    } else if (telas >= 3 && telas < 4) {
        alert("Seu plano irá custar R$ " + (basico + preco2));
    } else if (telas >= 4) {
        alert("Seu plano irá custar R$ " + (basico + preco3));
    }
}

else if (assinatura == 'premium') {
    if (telas > 1 && telas < 3) {
        alert("Seu plano irá custar R$ " + (premium + preco1));
    } else if (telas >= 3 && telas < 4) {
        alert("Seu plano irá custar R$ " + (premium + preco2));
    } else if (telas >= 4) {
        alert("Seu plano irá custar R$ " + (premium + preco3));
    }
}

else if (assinatura == 'ultra') {
    if (telas > 1 && telas < 3) {
        alert("Seu plano irá custar R$ " + (ultra + preco1));
    } else if (telas >= 3 && telas < 4) {
        alert("Seu plano irá custar R$ " + (ultra + preco2));
    } else if (telas >= 4) {
        alert("Seu plano irá custar R$ " + (ultra + preco3));
    }
}

let daysOfweek = ["caio", "samuel"];
console.log(daysOfweek[1])
console.log(daysOfweek.length)
let listdiver = ["Caio",1,2,5,"Escola",false]
 console.log(listdiver[3])
let nomedoaluno = prompt("Digite o nome do novo aluno; ") 

daysOfweek.push(nomedoaluno)
console.log ( "Os aluno da escola são: " +daysOfweek)


let daysOfweek = ["caio", "samuel"];
console.log(daysOfweek[1])
console.log(daysOfweek.length)
let listdiver = ["Caio",1,2,5,"Escola",false]
 console.log(listdiver[3])
let nomedoaluno = prompt("Digite o nome do novo aluno; ") 
daysOfweek.unshift("Caique", "lyan", "Clara")
daysOfweek.push(nomedoaluno)
daysOfweek.pop()
console.log ( "Os aluno da escola são: " +daysOfweek)
 
let daysOfweek = ["caio", "samuel"] 
let nomedoaluno = pompt("Digite onome do novo aluno")
daysOfweek.unshift("wesley", "caio", ) 
daysOfweek.push(nomedoaluno)
daysOfweek.unshift("vitoria")
daysOfweek.shift()
console.log("Os aluno ds escola são: "+daysOfweek) 
daysOfweek.sort()
daysOfweek.reverse()
console.log(daysOfweek.indexOf("samuel"))

const aluno=["Ana", "Bruno", "carlos", "Diana"];
for (const aluno of alunos){
  console.log("Olá, "+aluno +"!");
}

let number = Number(prompt("Digite o número que deseje somar aos anteriores"))
let numberfinal =0
  while(number != 0){
    numberfinal = numberfinal+number 
    number = Number(prompt("Digite o número que deseje somar aos anteriores"))
console.log(number+number)

  }
  console.log("o numero final é: "+numberfinal)

  let number = Number(prompt("Digite o número que deseje somar aos anteriores"))
let numberfinal =0
  while(number != 0){
    numberfinal = numberfinal+number 
    number = Number(prompt("Digite o número que deseje somar aos anteriores"))
console.log(number+number)

  }
  console.log("o numero final é: "+numberfinal)

 for (let i=1;i<12; i+=2){
console.log(i)
 }

function saudar(){
alert("Seja bem-vindo ao sistema")
}
saudar()
 function dobrarNumero(numero){
 return numero *2
}
 let resultado = dobraNumero(20)
alert("0 resultado: "+  resultado)

function cumprimenta(nome){
     alert("oi,"+nome+" tenha um excelente dia!")
} 
let nomedousurio = prompt("Digite o seu nome:")
cumprimenta(nomedousurio)
function
contagemRegressiva(numero){ 
    alert(numero)
    if(numero ===0){
        alert("Chegou")
         }
       contagemRegressiva(numero-1)
 } 
contagemRegressiva(5)*/


