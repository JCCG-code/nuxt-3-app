import { defineMongooseModel } from "#nuxt/mongoose";

export const User = defineMongooseModel(
  "User",
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
