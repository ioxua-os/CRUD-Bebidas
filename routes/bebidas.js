var express = require('express');
var bebidas = require('../persistence/rep-bebidas')
var tipos = require('../persistence/rep-tipos')

var router = express.Router();

function mapBodyToBebida(body) {
	return {
		nome: body.nomeBebida,
		tipo: parseInt(body.tipoBebida, 10),
		marca: body.marcaBebida,
		ano: parseInt(body.anoBebida, 10),
		preco: body.precoBebida
	}
}

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
		bebidas.delete(req.params.id)
		res.redirect('/bebidas')
	})

router.post('/new', (req, res) => {
	let bebida = mapBodyToBebida(req.body)
	bebidas.add(bebida)
	res.redirect('/bebidas')
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
		let bebida = mapBodyToBebida(req.body)
		console.log(bebida)
		bebidas.edit(req.params.id, bebida)
		res.redirect('/bebidas')
	});

module.exports = router;