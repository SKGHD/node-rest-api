import express from "express";

import userRoutes from "./routes/routes.js";

const app = express(); // <- This is aur whole app
const PORT = process.env.PORT || 3000; //deploying to cloudno.de

// Specifying that we'll be using JSON
app.use(express.json());

app.use("/payload", userRoutes);

app.get("/", (request, response) => response.send("Hello from Homepage"));


// Listening for incoming requests
app.listen(PORT, () =>
    console.log(`Server Running on port: http://localhost:${PORT}`)
);