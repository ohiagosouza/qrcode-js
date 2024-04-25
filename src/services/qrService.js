const QRCode = require("qrcode");

const qrService = {
  generateQRCode: async data => {
    try {
      const qrCode = await QRCode.toFile(`../../Downloads/qr-${data}`, data, {
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
