let tipos = [
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
	}]

module.exports = {
	all: () => {
		return tipos
	},
	byId: (id) => {
		let lista = tipos.filter((elem) => {
			return elem.id == id
		})

		if(lista.length > 0)
			return lista.pop()
		else 
			throw "Deu ruim"
	}
}