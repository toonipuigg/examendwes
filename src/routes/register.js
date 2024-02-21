const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const {addUsuario} = require('./conecbd')

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async(req, res) => {
    console.log('pasa por aqui')
    const {username, name, email, passwd} = req.body
    const passwd_crypt = await bcrypt.hash(passwd, 8)
    console.log(passwd_crypt);
    await addUsuario({nombre_usuario: username, nombre: name, email: email, contrasena_encriptada: passwd_crypt})
    res.redirect('/login')
})

module.exports = router