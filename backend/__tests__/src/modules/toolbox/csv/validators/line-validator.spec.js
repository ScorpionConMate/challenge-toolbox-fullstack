const { LineValidator } = require('../../../../../../src/modules/toolbox/csv/validators/line-validator')
const chai = require('chai')
describe('LineValidator tests', () => {
  /**
	 * @type {LineValidator}
	 */
  let lineValidator
  const linesCorrect = [
    'file1.csv,AtjW,64075909,6',
    'file1.csv,AtjW',
    'file1.csv,AtjW,64075909',
    'file1.csv,AtjW,64075909,6,74088708'
  ]

  // bad file name
  const linesIncorrect = [
    'file1..casv,AtjW,64075909,6'
  ]

  beforeEach(() => {
    lineValidator = new LineValidator()
  })

  describe('lineValidator hasAllColumns', () => {
    it('should return true if line has 4 columns', () => {
      chai.expect(lineValidator.hasAllColumns(linesCorrect[0])).to.be.true
    })

    it('should return false if line has less than 4 columns', () => {
      chai.expect(lineValidator.hasAllColumns(linesCorrect[1])).to.be.false
      chai.expect(lineValidator.hasAllColumns(linesCorrect[2])).to.be.false
    })

    it('should return false if line has more than 4 columns', () => {
      chai.expect(lineValidator.hasAllColumns(linesCorrect[3])).to.be.false
    })
  })

  describe('lineValidator isFile', () => {
    it('test lineValidator.isFile', function (done) {
      const data = 'file1.csv'
      const result = lineValidator.isFile(data)
      chai.assert.equal(result.file, 'file1.csv')
      chai.assert.equal(result.success, true)
      done()
    })

    it('test lineValidator.isFile to be right file name', () => {
      chai.assert.equal(lineValidator.isFile('file1.csv').file, 'file1.csv')
      chai.assert.equal(lineValidator.isFile('file2.csv').file, 'file2.csv')
      chai.assert.equal(lineValidator.isFile('file3.csv').file, 'file3.csv')
      chai.assert.equal(lineValidator.isFile('file4.csv').file, 'file4.csv')
      chai.assert.equal(lineValidator.isFile('file5.csv').file, 'file5.csv')
      chai.assert.equal(lineValidator.isFile('file6.csv').file, 'file6.csv')
    })

    it('test lineValidator.isFile to be wrong file name', () => {
      chai.assert.equal(lineValidator.isFile('file1..csv').file, 'file1..csv')
      chai.assert.equal(lineValidator.isFile('file2..csv').file, 'file2..csv')
      chai.assert.equal(lineValidator.isFile('file3..csv').file, 'file3..csv')

      chai.assert.equal(lineValidator.isFile('file1..csv').success, false)
      chai.assert.equal(lineValidator.isFile('file2..csv').success, false)
      chai.assert.equal(lineValidator.isFile('file3..csv').success, false)
    })
  })

  describe('lineValidator isText', () => {
    it('test lineValidator.isText', () => {
      chai.assert.equal(lineValidator.isText('AtjW').file, 'AtjW')
      chai.assert.equal(lineValidator.isText('PNzRfORtKtEDOzmIVrQuSh').file, 'PNzRfORtKtEDOzmIVrQuSh')
      chai.assert.equal(lineValidator.isText('d').file, 'd')
    })

    it('test lineValidator.isText to be wrong text', () => {
      chai.assert.equal(lineValidator.isText('AtjW').success, true)
      chai.assert.equal(lineValidator.isText('PNzRfORtKtEDOzmIVrQuSh').success, true)
      chai.assert.equal(lineValidator.isText('d').success, true)
    })

    it('test lineValidator.isText to be wrong text', () => {
      chai.assert.equal(lineValidator.isText('AtjW1').success, false)
      chai.assert.equal(lineValidator.isText('PNzRfORtKtEDOzmIVrQuSh1').success, false)
      chai.assert.equal(lineValidator.isText('d1').success, false)
    })
  })

  describe('lineValidator isNumber', () => {
    it('test lineValidator.isNumber', () => {
      chai.assert.equal(lineValidator.isNumber('64075909').file, 64075909)
      chai.assert.equal(lineValidator.isNumber('74088708').file, 74088708)
      chai.assert.equal(lineValidator.isNumber('6').file, 6)
    })

    it('test lineValidator.isNumber to be wrong number', () => {
      chai.assert.equal(lineValidator.isNumber('ASDcx2').success, false)
      chai.assert.equal(lineValidator.isNumber('zxca2').success, false)
      chai.assert.equal(lineValidator.isNumber('22ll').success, false)
    })
  })

  describe('lineValidator isHex', () => {
    it('test lineValidator.isHex', () => {
      const data = '70ad29aacf0b690b0467fe2b2767f765'
      const result = lineValidator.isHex(data)
      chai.assert.equal(result.success, true)
    })
  })
})
