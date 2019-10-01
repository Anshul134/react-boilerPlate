import express from 'express';

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
	res.sendFile(__dirname+'/views/index.html');
})

app.listen(PORT, () => {
	console.log(`listening to ${PORT}`);
})