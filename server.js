const express = require("express");
const app = express();

// Middleware
app.use(express.json());

app.use("/api/movies", require("./routes/movies"));

const port = 5000 || process.env.PORT
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})