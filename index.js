const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json({ Message: "Server is onlineee !!!!" });
  } catch (err) {
    console.log(err);
    res.json({ Error: err });
  }
});

app.listen(4500, () => {
  console.log("Server Running in port 4500");
});
