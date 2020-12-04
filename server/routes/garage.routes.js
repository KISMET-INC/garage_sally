const GarageController = require("../controllers/garage.controller");

module.exports = app => {
  app.get("/api/garages", GarageController.findAllGarages);
  app.get("/api/garages/:id", GarageController.findOneSingleGarage);
  app.put("/api/garages/update/:id", GarageController.updateExistingGarage);
  app.post("/api/garages/new", GarageController.createGarage);
  app.delete("/api/garages/delete/:id", GarageController.deleteAnExistingGarage);
};