var tipos = require('./rep-tipos')
var formatNumber = require('format-number');

var format = formatNumber({
	prefix: 'R$',
	integerSeparator: '.',
	decimal: ',',
	truncate: 2,
	padRight: 2
});

let bebidas = [
	{
		id: 1,
		nome: "Nome Legal",
		tipo: 2,
		marca: "Johnny Walker",
		ano: 1990,
		preco: 70
	},
	{
		id: 2,
		nome: "Original",
		tipo: 1,
		marca: "Periquita",
		ano: 2013,
		preco: 38.8
	},
	{
		id: 3,
		nome: "Absolut Vodka",
		tipo: 4,
		marca: "Absolut",
		ano: 2016,
		preco: 45.5
	},
	{
		id: 4,
		nome: "Weizenbier",
		tipo: 3,
		marca: "Eisenbahn",
		ano: 2017,
		preco: 19.9
	}];

module.exports = {
	all: () => {
		bebidas.forEach((bebida, index) => {
			if(typeof bebida.preco === "number")
				bebida.preco = format(bebida.preco)
			if(typeof bebida.tipo === "number")
				bebida.tipo = tipos.byId(bebida.tipo)
		})

		return bebidas
	},
	byId: (id) => {
		let lista = bebidas.filter((elem) => {
			return elem.id == id
		})

		if(lista.length > 0)
			return lista.pop()
		else 
			throw "Deu ruim"
	},
	delete: (id) => {
		bebidas = bebidas.filter((elem) => {
			return elem.id != id
		})
	},
	edit: (id, object) => {
		bebidas.forEach((elem) => {
			if(elem.id == id) {
				elem.nome = object.nome
				elem.tipo = object.tipo
				elem.marca = object.marca
				elem.ano = object.ano
				elem.preco = object.preco
			}
		})
	},
	add: (object) => {
		bebidas.push(object)
	}
}