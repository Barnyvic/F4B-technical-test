import app from "./app";
import dotenv from "dotenv";


dotenv.config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
