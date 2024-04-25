const express = require("express");
const PORT = 3000;

const router = require("./src/routes/qrcodeRoutes.js");

const app = express();
app.use(express.json());

app.use("/generateQR", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
