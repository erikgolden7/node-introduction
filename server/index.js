const express = require('express');
const {json} = require('body-parser');


const app = express();

app.use(json());
app.use(express.static(`${__dirname}/../public/build`));

const port = 3000;

const bookCtrl = require('./controllers/books_controller');


app.get('/api/books', bookCtrl.read);
app.post('./api/books', bookCtrl.create);
app.put('./api/books:id', bookCtrl.update);
app.delete('./api/books:id', bookCtrl.delete);


app.listen(port, () =>{
	console.log(`listening on port: ${port}`);
});