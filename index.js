const express = require("express");
const { router } = require("./routes/index.js");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors()); 
app.use(express.json());
app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});