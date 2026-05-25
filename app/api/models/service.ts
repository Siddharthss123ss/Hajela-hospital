import mongoose from "mongoose";

const serviceSchema =
  new mongoose.Schema(

    {

      name: String,

      slug: String,

      image_url: String,

      description: String,

      facilities: [String],

      timing: String,

      contact_number: String,

    },

    {
      timestamps: true,
    }

  );

export const service =

  mongoose.models.service ||

  mongoose.model(
    "service",
    serviceSchema
  );