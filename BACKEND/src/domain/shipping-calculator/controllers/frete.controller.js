const { Request, Response } = require("express");
const FreteService = require("../services/index");

const FreteController = {

 getFrete(req, res) {
    try {
      const frete = FreteService.calculaFrete(req);      
      return res.status(200).json(frete);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
}

module.exports = FreteController;


