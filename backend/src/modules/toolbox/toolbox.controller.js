/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 */

const ToolboxService = require('./toolbox.service')

class ToolboxController {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  static async getData (req, res) {
    const toolboxService = new ToolboxService()
    const fileName = req.query.fileName
    if (fileName && typeof fileName === 'string') {
      const data = await toolboxService.getFileParsed(fileName)
      return res.json(data)
    }

    const data = await toolboxService.getData()
    return res.json(data)
  }

  /**
   * @param {Request} req
   * @param {Response} res
   */
  static async getFiles (req, res) {
    const toolboxService = new ToolboxService()
    const data = await toolboxService.getFiles()
    return res.json(data.files)
  }
}

module.exports = ToolboxController
