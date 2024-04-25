const QRCode = require("qrcode");
const fs = require("node:fs");

const save_path = fs.realpathSync("qrcode-png", "utf-8");

const qrService = {
  generateQRCode: async data => {
    const fileName = data.replace(/[/.]/g, "_");

    try {
      const qrCode = await QRCode.toFile(`${save_path}/${fileName}_qrcode`, data, {
        errorCorrectionLevel: "H",
        type: "png",
        color: { dark: "FFF", light: "000" },
        width: 600,
      });

      return qrCode;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = qrService;
