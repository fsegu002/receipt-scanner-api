const mongoose = require('mongoose')
const Controller = require('../../lib/controller')
const userFacade = require('./facade')
const ScanSchema = require('../scan/schema')
const Scan = mongoose.model('Scan', ScanSchema)

class UserController extends Controller {

  findScansByUser(req, res, next) {
    return Scan.find().where('_user').equals(req.params.id)
      .then(collection => res.status(200).json(collection))
      .catch(err => next(err))
  }
}

module.exports = new UserController(userFacade)
