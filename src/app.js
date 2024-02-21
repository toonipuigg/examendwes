const express = require('express')
const path = require('path')
const port = 3000
const app = express()


const homeroute = require('./routes/home')
const loginroute = require('./routes/login')
const registerroute = require('./routes/register')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', homeroute)
app.get('/login', loginroute)
app.get('/register', registerroute)

app.use(express.static(path.join(__dirname, 'public')))
app.listen(port)
console.log(`Servidor escuchando en el puerto: ${port}`);