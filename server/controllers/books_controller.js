
let books = [{id: 1, title: 'holes', author: 'fred flintstone'}];
let id = 0;

module.exports = {
	create(req, res, next){
		req.body.id = id;
		books.push(req.body);
		id++;
		res.json(books);
	},
	
	read(req, res, next){
		res.json(books);
	},
	
	update: (req, res) => {
		const updateID = req.params.id;
		let index = books.findIndex( book => book.id == updateID );
		
		books[index] = {
			id: books[index].id,
			title: req.body.title || books[index].title,
			author: req.body.author || books[index].author
		};
		
		res.send(books);
	},
	
	delete: ( req, res ) => {
		const deleteID = req.params.id;
		bookID = books.findIndex( book => book.id == deleteID );
		books.splice( bookID, 1 );
		res.status(200).send( books );
	}
};