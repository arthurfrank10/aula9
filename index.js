let nome = prompt("qual seu nome?");
let cor = prompt("sua cor favorita?");

console.log(" a cor favorita de " + nome + " é " + cor);
console.log(`a cor favorita de ${nome} é ${cor}`);

console.log(nome.length);

const frase = "OiEeEee!";
const fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);
const fraseMaiuscula = frase.toUpperCase();
console.log(fraseMaiuscula);
const email = "  mika@gmail.com   ";
console.log(email.trim());
const frase2 = "hoje comi peixe";
console.log(frase2.includes("peixe"));
console.log(frase2.includes("carne"));
const frase3 = "hoje comi arroz, adoro arroz";
const frase4 = frase3.replaceAll("arroz", "batata");
console.log(frase4);


//exercicio 2
const frase5 = "salve salve gabriel";
const frase6 = frase5.toUpperCase();
console.log(frase6);
const frase7 = "vamos jogar bola?";
const frase8 = frase7.replaceAll("o", "i");
console.log(frase8);
console.log(frase8.length);

const listaDeCompras = ["batata", "alface", "kisla"];
const litaDeNumerosMega = [2, 13, 26, 35, 41, 60];
const meuArray = ["banana", 15, true];
const segundoItem = listaDeCompras[2];
console.log(segundoItem);

// exercicio 3
const array = ["pitbull", "xiwawa", "bulldog", "pinscher", "pastor alemao"];
let cachorro = array[Number(prompt("escolha um numero de 0 a 4"))];
console.log(cachorro);


const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length)

const seriesBoas = ["brooklyn99", "cobra kai"];
console.log(seriesBoas.includes("cobra kai"));
console.log(seriesBoas.includes("ragnarok"));

const numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);
numeros.push(5, 6, 7);
console.log(numeros);

const meusPeixes = ["palhaço", "mandarim", "esturjao"];
meusPeixes.pop();
console.log(meusPeixes);

const letras = ["a", "b", "c", "d", "e", "f", "g", "h"];
letras.splice(2, 1);
console.log(letras);
letras.splice(3, 2);
console.log(letras);

const array7 = [1, 2, 3, 4, 5, 6];
console.log(array7.length);
array7.push(7);
console.log(array7);
array7.splice(3, 2);
console.log(array7);
console.log(array7.length);
