const ToolboxAPI = require('./api-connector/toolbox-api')
const CsvParser = require('./csv/parser/csv-parser')

class ToolboxService {
  /**
     * @returns {Promise<{
     * files: string[],
     * }>}
     */
  getFiles () {
    const api = new ToolboxAPI()
    return api.getFileList()
  }

  /**
     * @param {string} file
     * @returns {Promise<any>}
     */
  getFileContent (file) {
    const api = new ToolboxAPI()

    return api.getFileContent(file)
  }

  /**
     * @returns {Promise<any>}
     * @param {string} file
     */
  async getFileParsed (file) {
    const fileContent = await this.getFileContent(file)
    console.log(fileContent)
    const parseFile = new CsvParser(fileContent, ',', file)
    return parseFile.toJson()
  }

  /**
   * @returns {Promise<any>}
   */
  async getData () {
    const files = await this.getFiles()
    return Promise.all(files.files.map(async (/** @type {string} file */ file) => {
      const fileContent = await this.getFileContent(file)
      console.log(fileContent)
      const parseFile = new CsvParser(fileContent, ',', file)
      return parseFile.toJson()
    }))
  }
}

module.exports = ToolboxService
