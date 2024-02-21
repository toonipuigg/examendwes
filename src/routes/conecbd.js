const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()

try{
    const connection = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASENAME
    })
    console.log('base de datos conectada');
} catch(err){
    console.log(err)
    console.log('base de datos no conectada');
}

const addUsuario = async (usuario) => {
    await connection.connect('INSERT INTO usuarios (nombre_usuario, nombre, email, contrasena_encriptada) VALUES(?,?,?,?)', [usuario.nombre_usuario, usuario.nombre, usuario.email, usuario.contrasena_encriptada])
}
const comprobarUsuario = async (usuario) => {
    await connection.connect('SELECT * FROM usuarios WHERE email = ? AND contrasena_encriptada = ?', [usuario.email, usuario.contrasena_encriptada])
}
module.exports = {
    addUsuario,
    comprobarUsuario
}