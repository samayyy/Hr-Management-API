/**
 * Define Global Variables Here
 * global._ = require("lodash")
 */

global.paginationLimit = 10
global.requestBodyvalidator =
    require("../common/bodyValidatorService").validate2
global.q = require("q")
const Validator = require("jsonschema").Validator
global.v = new Validator()

global.statusCodes = require("../config/statuscodes")
