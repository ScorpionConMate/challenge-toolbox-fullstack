class LineValidator {
  line = ''
  /**
   *
   * @param {string} line
   */
  constructor (line, separator = ',') {
    this.line = line
    this.separator = separator
  }

  /**
   * @param {string} line
   * @param {number} columns
   * @returns { boolean }
   */
  hasAllColumns (line, columns = 4) {
    return line.split(this.separator).length === columns
  }

  /**
   * @description Check if selected row is a filename
   * @param {string} data
   * - data: ´file1.csv´
   * @returns { {file: string, success: boolean} }
   */
  isFile (data) {
    const hasExtension = /^[a-zA-Z0-9]+\.csv$/gi
    return {
      file: data,
      success: !!((this.#validateLine(data) && hasExtension.test(data)))
    }
  }

  /**
   * @description Check if selected row is random text
   * @param {string} data - data: RgTya
   * - data: AtjW
   * - data: PNzRfORtKtEDOzmIVrQuSh
   * - data: d
   * ´
   * @returns { {file: string, success: boolean} }
   */
  isText (data) {
    const hasText = /^[a-zA-Z]+$/gi
    return {
      file: data,
      success: !!((this.#validateLine(data) && hasText.test(data)))
    }
  }

  /**
   * @description Check if selected row is a number
   * @param {string} data
   * - data: 64075909
   * - data: 6
   * - data: 74088708
   * - data: 6173
   * @returns { {file: string, success: boolean} }
   */
  isNumber (data) {
    const isNumber = /^[0-9]+$/gi
    return {
      file: data,
      success: !!((isNumber.test(data) && !Number.isNaN(data)))
    }
  }

  /**
   * @description Check if selected row is a hex
   * @param {string} data
   * -data: 70ad29aacf0b690b0467fe2b2767f765
   * -data: d33a8ca5d36d3106219f66f939774cf5
   * -data: 3e29651a63a5202a5661e05a060401fb
   * -data: f9e1bcdb9e3784acc448af34f4727252
   * @returns { {file: string, success: boolean} }
   */
  isHex (data) {
    const hasHex = /^[a-f0-9]+$/gi
    return {
      file: data,
      success: !!((this.#validateLine(data) && hasHex.test(data) && data.length === 32))
    }
  }

  /**
   * @description Check if selected row is a valid line
   * @param {string} data
   * @returns { boolean }
   */
  #validateLine (data) {
    return !!((data && typeof data === 'string' && data.length > 0))
  }

  validate () {
    if (this.hasAllColumns(this.line)) {
      const [file, text, number, hex] = this.line.split(',')
      const [fileValidation, textValidation, numberValidation, hexValidation] = [
        this.isFile(file),
        this.isText(text),
        this.isNumber(number),
        this.isHex(hex)
      ]
      return {
        hex: hexValidation.file,
        text: textValidation.file,
        number: numberValidation.file,
        success: !!((fileValidation.success && textValidation.success && numberValidation.success && hexValidation.success))
      }
    } else {
      return false
    }
  }
}

module.exports = { LineValidator }
