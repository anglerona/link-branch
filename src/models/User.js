const { Schema, models, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    email: String,
    image: String,
    emailVerified: Date,

})

export const User = models?.User || mongoose.model('User', UserSchema);