const router = Router()
const jsonSchema = require("../jsonSchema/CreateUserJsonSchema")
const errorStore = require("../errorStore/CreateUserErrorStore")
import UserModel from "../models/UserModel"

router.post("/createUser", (req, res) => {
    console.log("IN API--", req.body)

    try {
        console.log("API called")
        requestBodyvalidator(req.body, jsonSchema, errorStore)
            .then((data) => {
                return UserModel.createUser(data)
            })
            .then((response) => {
                console.log("response--", response)
                res.status(statusCodes.Success).send({
                    status: statusCodes.Success,
                    message: "successfully saved"
                })
            })
            .catch((error) => {
                console.log("Error in Creating User ", error)
                res.status(statusCodes.Bad_Request).send({
                    status: statusCodes.Bad_Request,
                    message: "Bad request",
                    error: error
                })
            })
    } catch (err) {
        console.log("error --", err)
        res.status(statusCodes.Internel_Server_Error).send({
            status: statusCodes.Internel_Server_Error,
            message: "Internal server error",
            error: {
                message: "oops something went wrong"
            }
        })
    }
})
router.post("/search", async (req, res) => {
    try {
        const data = await PersonModel.search(req.body)
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})
export default router
