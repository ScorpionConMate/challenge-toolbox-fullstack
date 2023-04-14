const ToolboxService = require('../toolbox.service')

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function fileExistMiddleware (req, res, next) {
  const file = req.params.file
  if (!file) {
    next()
    return
  }

  const toolboxService = new ToolboxService()
  const files = await toolboxService.getFiles()
  if (files.files.includes(file)) {
    next()
  } else {
    res.status(404).send('File not found')
  }
}

module.exports = fileExistMiddleware
