var express = require('express');
var router = express.Router();
var formatNumber = require('format-number');

var format = formatNumber({
	prefix: 'R$',
	integerSeparator: '.',
	decimal: ',',
	truncate: 2,
	padRight: 2
});

/* GET users listing. */
router.route('/')
	.get((req, res, next) => {
		var listagem = [
				{
					id: 1,
					nome: "Nome Legal",
					tipo: "Whiskey",
					marca: "Johnny Walker",
					ano: 1990,
					preco: 70
				},
				{
					id: 2,
					nome: "Original",
					tipo: "Vinho Tinto",
					marca: "Periquita",
					ano: 2013,
					preco: 38.8
				}
		];

		listagem.forEach((bebida, index) => {
			bebida.preco = format(bebida.preco)
		})

		res.render('all_bebidas', {
			title: "Listagem",
			bebidas: listagem
		})
	})

router.get('/create', (req, res) => {
	let listagemTipos = [
		{
			id: 1, nome: 'Vinho'
		},
		{
			id: 2, nome: 'Uísque'
		},
		{
			id: 3, nome: 'Cerveja'
		},
		{
			id: 4, nome: 'Vodka'
		},
		{
			id: 5, nome: 'Saquê'
		}
	]
	res.render('one_bebida', {
		title: 'Nova bebida',
		option: 'cadastro',
		tipos: listagemTipos
	});
});

router.route('/:id')
	.get((req, res) => {
		res.render('todo', {
			message: 'Exibir a view de detalhes de uma bebida'
		});
	})
	.delete((req, res) => { // DELETE '/'
		res.render('todo', {
			message: 'Deletar o bagulho'
		})
	})

router.post('/new', (req, res) => {
	res.render('todo', {
		message: 'Efetivamente cadastrar a bebida'
	});
});

router.route('/edit/:id')
	.get((req, res) => {
		res.render('todo', {
			message: 'Exibir a view de edição'
		});
	})
	.post((req, res) => {
		res.render('todo', {
			message: 'Editar a bebida na persistência'
		});
	});

module.exports = router;