import { User } from "@clerk/nextjs/dist/types/server";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        clerkId:{
            type: string,
            required:true,
            unique:true,
        },
        email: {
            type: string,
            
        },
        firstName: {
            type: string,
            required:true,
        },
        lastName: {
            type: string,
            required:true,
        },
        username: {
            type: string,
            required:true,
        },
        avatar: {
            type: string,
            required:true,
        },
        followers: {
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
            default:[],
        },
        following: {
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
            default:[],
        },
    },{timestamps:true}
);
const User = mongoose.models.User || mongoose.model('User',userSchema);

export default User;