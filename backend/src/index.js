const express = require('express')
const toolboxRouter = require('./modules/toolbox/toolbox.router')
require('express-async-handler')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.APP_PORT || 3000

app.get('/', (req, res) => res.send({
    version: '1.0.0',
    name: 'Toolbox API',
}))
app.use('/files', toolboxRouter)
app.listen(port, () => console.log(`API Running on port ${port}!`))
