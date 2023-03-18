// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(comprimento, largura) {
  // implemente sua lógica aqui
  comprimento = Number(prompt(`Digite a ALTURA do seu retangulo: `))
  largura = Number(prompt(`Digite a LARGURA do seu retangulo: `))
  console.log(comprimento * largura)
}

// EXERCÍCIO 02
function imprimeIdade(idade) {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Qual o ano atual? `))
  const anoNascimento = Number(prompt(`Qual o ano que você nasceu?`))
  idade = anoAtual - anoNascimento
  console.log(idade)
  //possiblidade de um return idade;
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return Number(peso / (altura ** 2))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, mail) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt(`Digite aqui o seu nome: `)
  idade = Number(prompt(`Digite aqui a sua idade: `))
  mail = prompt(`Digite aqui seu email: `)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${mail}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3){
  // implemente sua lógica aqui
  let i = 1
  let coresFavoritas = [cor1, cor2, cor3]
  for (let j = 0; j < coresFavoritas.length; j++) {
    coresFavoritas[j] = prompt(`Digite aqui a sua ${i++}ª cor favorita: `)
  }
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
} // todo

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  arrecadadoComIngresso = 0
  ingressosVendidos = 0
  while (custo > arrecadadoComIngresso){
    ingressosVendidos += 1
    arrecadadoComIngresso += valorIngresso
  }
  console.log(`Custo ${custo} \nvalor do ingresso ${valorIngresso} \narrecadado com ingresso ${arrecadadoComIngresso} \nIngressos vendidos ${ingressosVendidos}`)
  return ingressosVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  console.log(`Tamanho da primeira string (${string1}): ${string1.length}! \nTamanho da segunda string (${string2}): ${string2.length}! \nO tamanho da primera string é o mesmo da segunda string? ${string1.length === string2.length}`)
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  ultimoElemento = Number(array.length - 1)
  return array[ultimoElemento]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  ultimoElemento = Number(array.length - 1)
  let auxiliar = array[0]
  array[0] = array[ultimoElemento]
  array[ultimoElemento] = auxiliar
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  return string1 == string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt(`Digite o ano atual: `));
  let anoNascimento = Number(prompt(`Digite o ano em que nasceu: `));
  let anoIdentidadeEmitida = Number(
    prompt(`Digite o ano em que seu RG foi emitido: `)
  );
  let precisaSerRenovada = false;
  const idade = Number(anoAtual - anoNascimento);
  if (idade <= 20 && anoAtual - anoIdentidadeEmitida >= 5) {
    precisaSerRenovada = true;
  } else if (
    idade <= 50 &&
    idade > 20 &&
    anoAtual - anoIdentidadeEmitida >= 10
  ) {
    precisaSerRenovada = true;
  } else if (idade > 50 && anoAtual - anoIdentidadeEmitida >= 15) {
    precisaSerRenovada = true;
  }
  console.log(precisaSerRenovada);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  isBissexto = false

  if (ano % 400 === 0){
    isBissexto = true
    return isBissexto
  } 
  else if (ano % 4 === 0) {
    if(ano % 100 === 0 && ano % 400 !== 0){
      isBissexto = false
      return isBissexto
    }
    isBissexto = true
    return isBissexto
  }
  return isBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maiorDeIdade = prompt(`Você tem mais de 18 anos?`).toLocaleLowerCase()
const ensinoMedioCompleto = prompt(`Você possui ensino médio completo?`).toLocaleLowerCase()
const horarioDisponivel = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`).toLocaleLowerCase()
if (maiorDeIdade === "sim" && ensinoMedioCompleto === "sim" && horarioDisponivel === "sim") {
  console.log(true)
} else {console.log(false)}
}