const express = require("express");
const qrController = require("../controllers/qrcodeController");
const router = express();

router.post("/", qrController.generateQRCode);

module.exports = router;
