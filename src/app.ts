import express, { Application, Request, request, Response } from "express";
import cors from "cors";
import router from "./app/routers";
import gobalErrorHandiler from "./app/middlwares/gobalErrorHandilers";
import notfound from "./app/middlwares/not.found";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "padal mart server is run  ",
  });
});

app.use("/api", router);
app.use(gobalErrorHandiler);
app.use(notfound);
export default app;
