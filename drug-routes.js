const express = require('express');
const router = express.Router();

// Importing drugs data from categories
const herbalDrugsData = require("./drugs-data/HDrugs");
const malariaDrugsData = require("./drugs-data/MDrugs");
const multivitaminsData = require("./drugs-data/Multivitamins");
const stomachUpsetsData = require("./drugs-data/SUpsets");
const antibioticsData = require("./drugs-data/Antibiotics");
const bloodTonicsData = require("./drugs-data/BTonics");
const coughSyrupsData = require("./drugs-data/CCSyrups");
const dewormersData = require("./drugs-data/Dewormers");

router.get("/", (req, res) => {
    const allDrugs = [
        ...herbalDrugsData,
        ...malariaDrugsData,
        ...multivitaminsData,
        ...stomachUpsetsData,
        ...antibioticsData,
        ...bloodTonicsData,
        ...coughSyrupsData,
        ...dewormersData,
      ];
    
    res.json(allDrugs);
});

// ROUTES TO GET DRUGS BY CATEGORIES
// Route to get herbal drugs
router.get("/herbal", (req, res) => {
    res.json(herbalDrugsData);
});

// Route to get malaria drugs
router.get("/malaria", (req, res) => {
    res.json(malariaDrugsData);
});

// Route to get multivitamin drugs
router.get("/multivitamins", (req, res) => {
    res.json(multivitaminsData);
});

// Route to get stomach upset drugs
router.get("/stomachupsets", (req, res) => {
    res.json(stomachUpsetsData);
});

// Route to get antibiotics drugs
router.get("/antibiotics", (req, res) => {
    res.json(antibioticsData);
});

// Route to get blood tonic drugs
router.get("/bloodtonics", (req, res) => {
    res.json(bloodTonicsData);
});

// Route to get cough syrups drugs
router.get("/cough-cold-syrups", (req, res) => {
    res.json(coughSyrupsData);
});

// Route to get dewormer drugs
router.get("/dewormer", (req, res) => {
    res.json(dewormersData);
});

// Route to get drug by id
router.get("/:id", (req, res) => {
    const drugId = parseInt(req.params.id);
  const allDrugs = [
    ...herbalDrugsData,
    ...malariaDrugsData,
    ...multivitaminsData,
    ...stomachUpsetsData,
    ...antibioticsData,
    ...bloodTonicsData,
    ...coughSyrupsData,
    ...dewormersData,
  ];

    const drug = allDrugs.find(d => d.id === drugId);
    if (drug) {
      res.json(drug);
    } else {
      res.status(404).json({ message: "Drug not found" });
    }
});
  
  module.exports = router;