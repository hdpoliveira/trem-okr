import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import * as home from "./routes/home";
import * as messages from "./routes/messagesApi";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", home.get);
app.get("/api/messages", messages.get);
app.post("/api/messages", messages.post);

app.listen(app.get("port"), () => {
    console.log(
        `Trem is running at http://localhost:${app.get("port")} in ${app.get(
            "env"
        )} mode`
    );
    console.log("Press CTRL-C to stop\n");
});

export default app;
