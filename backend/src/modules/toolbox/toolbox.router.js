const { Router } = require('express')
const fileExistMiddleware = require('./middlewares/file-exist.middleware')
const ToolboxController = require('./toolbox.controller')

const route = Router()

route.get('/data', fileExistMiddleware, ToolboxController.getData)
route.get('/list', ToolboxController.getFiles)
module.exports = route
