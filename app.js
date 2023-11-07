'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama = Angeline Natasya Liong\n NIM = 51022002\n Jurusan = Sistem Informasi\n Makasih!')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
