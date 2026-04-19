import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server is listening on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!");
  });
