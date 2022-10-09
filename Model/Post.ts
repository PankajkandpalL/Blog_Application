import mongoose, { Document, model, Model, Schema } from "mongoose"

export interface IPost extends Document {
    title: string,
}

const PostSchema: Schema = new Schema({
    title: {
        type: String
    }
})


export const Post: Model<IPost> = mongoose.models.Post || model("Post", PostSchema)