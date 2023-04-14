const { LineValidator } = require('../validators/line-validator')

class CsvParser {
  file
  separator

  fileName = ''
  /**
   * @type {Array<{
     * text: string,
     * number: number,
     * hex: string,
   * }>}
   */
  lines = []
  /**
   * @param {string} file
   * @param {string} separator
   * @param {string} fileName
   */
  constructor (file, separator = ',', fileName = '') {
    this.file = file
    this.separator = separator
    this.fileName = fileName
    this.parse()
  }

  /**
   * @description Parse CSV file
   * @returns {void}
   */
  parse () {
    const lines = this.file.split(/\r?\n/)
    /** @type {Array<{ text: string; number: number; hex: string; }>} */

    lines.shift()
    const validation = lines.map((line) => {
      const lineValidator = new LineValidator(line, this.separator).validate()
      if (!lineValidator || !lineValidator.success) return null
      const { text, number, hex } = lineValidator
      return { text, number, hex }
    }).filter(Boolean)

    // @ts-ignore
    this.lines = validation
  }

  /**
   * @description Get file name
   * @returns {string}
   * @example
   * file1.csv
   * file2.csv
   * file3.csv
   */
  get FileName () {
    return this.fileName
  }

  toJson () {
    return {
      file: this.fileName,
      lines: this.lines
    }
  }
}

module.exports = CsvParser
