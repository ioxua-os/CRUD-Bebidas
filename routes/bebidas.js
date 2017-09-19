var express = require('express');
var bebidas = require('../persistence/rep-bebidas')
var tipos = require('../persistence/rep-tipos')

var router = express.Router();

/* GET users listing. */
router.route('/')
	.get((req, res, next) => {
		var listagem = bebidas.all()

		res.render('all_bebidas', {
			title: "Listagem",
			bebidas: listagem
		})
	})

router.get('/create', (req, res) => {
	let listagemTipos = tipos.all()

	res.render('one_bebida', {
		title: 'Nova bebida',
		option: 'cadastro',
		tipos: listagemTipos
	});
});

router.route('/:id')
	.get((req, res) => {
		let bebida = bebidas.byId(req.params.id)

		res.render('one_bebida', {
			title: bebida.nome,
			bebida: bebida,
			option: 'exibicao'
		});
	})
	.delete((req, res) => { // DELETE '/'
		res.render('todo', {
			message: 'Deletar o bagulho'
		})
		console.log(req.params)
	})

router.post('/new', (req, res) => {
	res.render('todo', {
		message: 'Efetivamente cadastrar a bebida'
	});
		console.log(req.params)
});

router.route('/edit/:id')
	.get((req, res) => {
		let bebida = bebidas.byId(req.params.id)
		let listaTipos = tipos.all()

		res.render('one_bebida', {
			title: bebida.nome,
			bebida: bebida,
			tipos: listaTipos,
			option: 'edicao'
		});
	})
	.post((req, res) => {
		res.render('todo', {
			message: 'Editar a bebida na persistência'
		});

		console.log(req.params)
	});

module.exports = router;