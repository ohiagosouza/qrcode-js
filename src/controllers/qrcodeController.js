const qrService = require("../services/qrService");

const qrController = {
  generateQRCode: async (req, res) => {
    try {
      const { data } = req.body;

      if (!data) {
        return res.status(400).json({ error: "Texto para gerar o QR não fornecido" });
      } else {
        const qrCode = await qrService.generateQRCode(data);
        res.sendStatus(200).json(qrCode);
      }
    } catch (error) {
      console.log("Erro ao gerar QR", error);
      res.status(500).json({ error: "Erro no Servidor" });
    }
  },
};

module.exports = qrController;
