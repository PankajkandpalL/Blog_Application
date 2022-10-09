import { connect } from 'mongoose'

const MONGO_URI: string = "mongodb+srv://pankaj:panki@cluster0.z68oif9.mongodb.net/nextJSBlog?retryWrites=true&w=majority"

export const connectToDatabase = () => connect(MONGO_URI)