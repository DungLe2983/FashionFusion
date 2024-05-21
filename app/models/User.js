import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            // require: true,
        },
        name: {
            type: String,
            default: function () {
                return this.email ? this.email.split("@")[0] : null;
            },
        },
        phoneNumber: {
            type: String,
            match: /^\d{10}$/,
            default: "",
        },
        address: {
            type: [String],
            default: [],
        },
        sex: {
            type: String,
            default: "",
        },
        birthday: {
            type: Date,
            default: "",
        },
    },
    { timestamps: true }
);

const User = models?.User || model("User", UserSchema);
export default User;
