import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import productRoute from "./routes/products.routes";
import authRoute from "./routes/auth.routes";
import userRoute from "./routes/user.routes";
import { createRoles } from "./libs/initialSetup";

const app = express();
createRoles();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

export default app;
