import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";// for writitng aggregation queries

const videoschema = new Schema(
    {

        videoFile: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
            index: true
        },
        thumbnail: {
            type: String,  //Cloudinary Url
            required: true
        },
        description: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true

        },

        duration: {
            type: Number,  // extraxt from cloudinary ur
            required: true
        },

        views: {
            type: Number,
            default: 0
        },

        isPublished: {
            type: Boolean,
            default: true
        }



    },
    {
        timestamps: true
    }
)
videoschema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.Model("Video", videoschema);