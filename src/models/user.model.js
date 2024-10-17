import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {  // no need to declare Id field MONGODB gives it by default
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true  // This field is used for fast retrieval of user records.
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },


        avatar: {
            type: String,  //cloudinary url
            required: true

        },

        coverImage: {
            type: String  //cloudinary url

        },

        watchHistory: [         // way to declare type array
            {
                type: Schema.Types.ObjectId,
                ref: "Video"              // reference to another data model "Video, i.e., watch history is an array Containing Video"
            }
        ],

        password: {
            type: String,
            reuired: [true, 'Password is required']  //custom message to display

        },

        refreshToken: {
            type: String 

        }


    },
    {

        timestamps: true        // for createdAt and updatedAt fields
    }
);


export const User = mongoose.model("User", userSchema)  
/* Standard practice to create a model "User" with a capital first letter and singular, 
 This model would be saved as "users" in MONGODB */