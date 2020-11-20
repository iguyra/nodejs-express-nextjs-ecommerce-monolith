const express = require("express");
// const next = require("next");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const dev = process.env.NODE_ENV !== "production";
// const NextApp = next({ dev });
// const handle = NextApp.getRequestHandler();
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);


//db
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DATABASE CONNECTED! ISAVE`));

  // app
const app = express();

     //CORS
if (process.env.NODE_ENV === "development") {
   app.use(cors({origin:`${process.env.CLIENT_URL}`}))
 }
  
    //middleware
      app.use(express.json());
      app.use(cookieParser());
  
      //routes
      app.use("/api/users", userRouter);
      app.use("/api/products", productRouter);
  
      // app.get("*", (req, res) => {
      //   return handle(req, res);
      // });
      const port = process.env.PORT || 8000;
  
      app.listen(port, (err) => {
        if (err) throw err;
        console.log(`server is ready on port ${port}`);
      });
   

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log(`DATABASE CONNECTED! ISAVE`));

// NextApp.prepare()
//   .then(() => {
//     const app = express();

//     app.use(express.json());
//     app.use(cors());
//     app.use(cookieParser("thisisthiscoookiesecret"));

//     app.use("/api/users", userRouter);
//     app.use("/api/", productRouter);

//     app.get("*", (req, res) => {
//       return handle(req, res);
//     });
//     const port = process.env.PORT || 3000;

//     app.listen(3000, (err) => {
//       if (err) throw err;
//       console.log("> Ready on http://localhost:3000");
//     });
//   })
//   .catch((ex) => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
