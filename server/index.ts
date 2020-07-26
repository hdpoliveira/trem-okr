import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import * as home from "./routes/home";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", home.index);

app.listen(app.get("port"), () => {
    console.log(
        `Trem is running at http://localhost:${app.get("port")} in ${app.get(
            "env"
        )} mode`
    );
    console.log("Press CTRL-C to stop\n");
});

export default app;
