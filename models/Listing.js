const { types } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image: {
        filename: { type: String, default: "default_image" },
        url: {
          type: String,
          default:
            "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          set: (v) =>
            v === ""
              ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              : v,
        },
      },
      price:Number,
      location:String,
      country:String,
      latitude: Number,
  longitude: Number,
      reviews:[
        {
          type:Schema.Types.ObjectId,
          ref:"Review",
        }
      ],
      owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
      }
});

listingSchema.post('findOneAndDelete',async(listing)=>{
  if(listing)
  {
    await Review.deleteMany({_id:{$in:listing.reviews}});
  }
  
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;