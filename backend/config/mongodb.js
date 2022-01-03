const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true }).catch(e => { 
    const msg = "Erro! Não foi possível conectar com o MongoDB!"
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})