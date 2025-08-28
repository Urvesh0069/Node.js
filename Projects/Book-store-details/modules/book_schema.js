import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true

  },
  genre: {
    type: String,
    required: true
  },
  ISBN: {
    type: String,
    unique: true,
    sparse: true

  },
  publisher: {
    type: String

  },
  publishedYear: {
    type: Number

  },
  price: {
    type: Number,
    min: 0

  },
  totalCopies: {
    type: Number,
    default: 1,
    min: 1

  },
  availableCopies: {
    type: Number,
    default: 1,
    min: 0

  },
  shelfNo: {
    type: String

  },
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

export default Book;
