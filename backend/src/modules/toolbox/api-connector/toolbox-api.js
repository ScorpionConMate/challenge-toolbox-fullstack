const { Axios } = require('axios')

/**
 * @typedef {import("axios").AxiosInstance} AxiosInstance
 * @typedef {import("axios").AxiosResponse} AxiosResponse
 */

class ToolboxAPI {
  constructor () {
    // this.token = process.env.TBX_API_TOKEN;
    this.token = 'aSuperSecretKey'
  }

  get axiosInstance () {
    const version = 'v1'
    // curl -X GET "https://echo-serv.tbxnet.com/v1/secret/files" -H "accept: application/json" -H "authorization: Bearer aSuperSecretKey"
    return new Axios({
      baseURL: `https://echo-serv.tbxnet.com/${version}/`,
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${this.token}`
      }
    })
  }

  async getFileList () {
    const fileList = await this.axiosInstance.get('secret/files')
    return JSON.parse(fileList.data)
  }

  /**
   * @param {string} fileName
   * @returns {Promise<AxiosResponse>}
   */
  async getFileContent (fileName) {
    const file = await this.axiosInstance.get(`secret/file/${fileName}`)
    return file.data
  }
}

module.exports = ToolboxAPI
