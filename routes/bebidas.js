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
router.get('/', function(req, res, next) {
	var listagem = [
			{
				nome: "Nome Legal",
				tipo: "Whiskey",
				marca: "Johnny Walker",
				ano: 1990,
				preco: 70
			},
			{
				nome: "Original",
				tipo: "Vinho Tinto",
				marca: "Periquita",
				ano: 2013,
				preco: 38.8
			}
	];

	listagem.forEach((bebida, index) => {
		bebida.preco = format(bebida.preco)
	});

	res.render('all_bebidas', {
		title: "Listagem",
		bebidas: listagem
	});
});

router.get('/create', (req, res) => {
	res.render('todo', {
		message: 'Criar a interface de cadastro de uma bebida'
	});
});

router.post('/new', (req, res) => {
	res.render('todo', {
		message: 'Cadastrar a bebida'
	});
});

module.exports = router;
