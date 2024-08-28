import mongoose from "mongoose";

const connection = async () => {
  const URI =
    "mongodb+srv://vedsocialid:admin123@cluster0.ukamajh.mongodb.net/GoogleDocs?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(URI, {});
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error while connecting to the database", error);
  }
};

export default connection;
