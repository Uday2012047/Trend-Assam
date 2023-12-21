const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

const connectDatabase = require("./config/database");

//handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to uncaught exception");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on ${process.env.PORT}`);
});

//unhandled promise rejection error
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server due to unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
