console.log('Hello World');

var a;

  a = document.getElementById('area');

  a.addEventListener('click', click)
  a.addEventListener('mouseenter', entrou)
  a.addEventListener('mouseout', saiu)

  function click(){
    a.innerText = 'Clicou';
    a.style.background = 'red';
  }

  function entrou(){
    a.innerText = 'Entrou';
    a.style.background = 'white';
  }

  function saiu(){
    a.innerText = 'Saiu';
    a.style.background = 'green';
  }

var obj = {
    nome: 'teste',
    idade: 25,
    profissao: 'programador'
};

console.log(obj);

console.log(obj.nome);

obj.salario = 3000;

var array = [10, 30, 40, 50];

console.log(array);

console.log('A posição 3 é: ' + array[2]);

array[4] = 70;

if (array[4] <= array[3]){
    console.log('testando if menor igual')
} else {
    console.log('testando if maior')
}