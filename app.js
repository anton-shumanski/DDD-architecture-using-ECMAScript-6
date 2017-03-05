let express = require('express');
let app = express();
let indexRouter = require('./src/Routers/IndexRouter');

app.use(express.static('public'));

app.set('views', './src/Views');
app.set('view engine', 'ejs');

app.use('/', indexRouter());

let PORT = process.env.PORT || 8000;

app.listen(PORT, function(err) {
    console.log('Server running on port ' + PORT);
});