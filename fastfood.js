function FastFood(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

function Hamburguer(nome, preco, tipoDeCarne) {
    FastFood.call(this, nome, preco);
    this.tipoDeCarne = tipoDeCarne;
}

function Pizza(nome, preco, tamanho) {
    FastFood.call(this, nome, preco);
    this.tamanho = tamanho;
}

const hamburguer1 = new Hamburguer("Hamburguer", 22.50, "Angus");
const pizza1 = new Pizza("Peperoni", 35.00, "grande");
const hamburguer2 = new Hamburguer("Chicken Burger", 25.00, "Frango");

console.log(hamburguer1);
console.log(pizza1);
console.log(hamburguer2);