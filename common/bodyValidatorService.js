const errorify = require("./errorifyService")
class BodyValidator {
    validate(body, jsonschema, errorStore) {
        let deferred = q.defer()
        try {
            let validate = v.validate(body, jsonschema)
            if (validate.valid) {
                deferred.resolve(body)
            } else {
                deferred.reject({
                    status: 403,
                    error: errorify(validate.errors, errorStore).faults
                })
            }
        } catch (error) {
            deferred.reject(error)
        }
        return deferred.promise
    }
    validate2(body, jsonschema, errorStore) {
        let deferred = q.defer()
        try {
            let validate = v.validate(body, jsonschema)
            console.log("In validate--", validate)
            if (validate.valid) {
                deferred.resolve(body)
            } else {
                deferred.reject(errorify(validate.errors, errorStore).faults)
            }
        } catch (error) {
            deferred.reject(error)
        }
        return deferred.promise
    }
}
module.exports = new BodyValidator()
