import express, { Express, Request, Response } from "express";
import logger from "morgan";
import accountRouter from "./routes/account-route";


const app: Express = express();
app.use(logger("dev"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/akiva-bank", accountRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("*", (req: Request, res: Response) => {
  return res.status(404).json({ message: "Route not found" });
});

export default app;
