const Controller = require('../../lib/controller')
const scanFacade = require('./facade')

class ScanController extends Controller {}

module.exports = new ScanController(scanFacade)
