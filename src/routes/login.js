const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { comprobarUsuario } = require('./conecbd')

router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/', async(req, res) => {
    const {email, passwd} = req.body
    const passwd_crypt = await bcrypt.hash(passwd, 8)
    await comprobarUsuario({email: email, contrasena_encriptada: passwd_crypt})
    res.redirect('/vista')
})
module.exports = router