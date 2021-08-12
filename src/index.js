import app from "./app";
import "./database";
export const port = 2000 || process.env.PORT;

app.listen(port, () => {
  console.log("Server in port: ", port);
});
