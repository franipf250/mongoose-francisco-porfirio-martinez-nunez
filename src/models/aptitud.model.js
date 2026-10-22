import { model, Schema, Types } from "mongoose";

const aptitudSchema = new Schema(
  "Aptitud",
  {
    // Model attributes are defined here
    nameAptitud: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    timestamps: false,
  },
);
export const AptitudModel = model("Aptitud", aptitudSchema);