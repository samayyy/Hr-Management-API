var schema = new Schema(
    {
        name: { type: String },
        email: { type: String, unique: true },
        mobile: { type: String, unique: true },
        password: { type: String },
        userType: { type: String, default: "user", enum: ["user", "admin"] },
        status: {
            type: String,
            enum: ["enabled", "disabled", "archived"],
            default: "enabled",
            index: true
        }
    },
    {
        timestamp: true
    }
)
export default mongoose.model("User", schema)
