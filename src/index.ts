import express from "express";
import serverConfig from "./config/server.config";

const app = express();
const PORT = serverConfig.PORT;

// Routes
import v1Router from "./routes";
app.use("/api", v1Router);

app.listen(PORT, () => {
  console.log(`Server listening to PORT:${PORT}`);
});
