import mongoose, { Document } from "mongoose";

interface IResource extends Document {
  name: string;
  description: string;
}

const resourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IResource>("Resource", resourceSchema);
