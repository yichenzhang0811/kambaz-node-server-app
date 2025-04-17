import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    modules: String,
    description: String,
    available_at: String,
    available_until: String,
    due_date: String,
    points: Number,
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
