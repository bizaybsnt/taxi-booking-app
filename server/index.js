/*global process*/

const app = require('./bootstrap/app');

const PORT = 7000;

app.set('port', PORT);
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at:', p, 'reason:', reason);
});