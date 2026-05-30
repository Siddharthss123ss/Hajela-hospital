import mongoose, {
  Schema,
  Document
} from "mongoose";

export interface IDoctor extends Document {

  name: string;

  slug: string;

  role: string;

  degree: string;

  experience: string;

  department: string;

  opd_timing: string;

  appointment_number: string;

  about: string;

  expertise: string[];

  image_url: string;

}

const DoctorSchema = new Schema<IDoctor>(

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
      default: "",
    },

    experience: {
      type: String,
      default: "",
    },

    department: {
      type: String,
      default: "",
    },

    opd_timing: {
      type: String,
      default: "",
    },

    appointment_number: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },

    expertise: [
      {
        type: String,
      }
    ],

    image_url: {
      type: String,
      default: "",
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