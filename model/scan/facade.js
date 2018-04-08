const Facade = require('../../lib/facade')
const scanSchema = require('./schema')

class ScanFacade extends Facade {}

module.exports = new ScanFacade('Scan', scanSchema)
