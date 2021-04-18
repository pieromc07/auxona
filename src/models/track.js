import { Schema, model } from "mongoose";

const trackSchema = new Schema(
    {
        deezer: String,
        youtube: String,
        title: String,
        duration: Number
        
    },
    {

        timestamps: true,
        versionKey: false,
    }
);

export default model("track", trackSchema);