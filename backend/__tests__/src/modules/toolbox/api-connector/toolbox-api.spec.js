const chai = require('chai')
const ToolboxAPI = require('../../../../../src/modules/toolbox/api-connector/toolbox-api')

describe('ToolboxAPi connector', () => {
  /**
	 * @type {ToolboxAPI}
	 */
  let api

  /**
	 * @type {Array<string>}
	 */
  let filesList
  beforeEach(async () => {
    api = new ToolboxAPI()
    filesList = JSON.parse(await api.getFileList()).files
  })

  describe('getFileList', () => {
    it('should return a list of files', async () => {
      const result = await api.getFileList()
      chai.expect(JSON.parse(result)).to.be.an('object')
      chai.expect(JSON.parse(result)).to.have.property('files')
      chai.expect(JSON.parse(result).files).to.be.an('array')
    })
  })

  describe('getFileContent', function () {
    this.timeout(60000)
    it('should return the content of a file', async () => {
      for (const file of filesList) {
        const result = await api.getFileContent(file)
        chai.expect(result).to.be.a('string')
      }
    })
  })
})
