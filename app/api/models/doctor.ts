import mongoose,
{
  Schema,
  Document
}
from "mongoose";

export interface IDoctor
extends Document {

  name: string;

  slug: string;

  role: string;

  degree: string;

  experience: string;

  about: string;

  expertise: string[];

  image_url: string;

}

const DoctorSchema =
new Schema<IDoctor>(

  {

    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      required: true,
    },

    degree: {
      type: String,
    },

    experience: {
      type: String,
    },

    about: {
      type: String,
    },

    expertise: [

      {
        type: String,
      }

    ],

    image_url: {
      type: String,
    },

  },

  {
    timestamps: true,
  }

);

export const doctor =

mongoose.models.doctor ||

mongoose.model<IDoctor>(
  "doctor",
  DoctorSchema
);