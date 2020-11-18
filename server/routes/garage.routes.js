const GarageController = require("../controllers/garage.controller");

module.exports = app => {
  app.get("/api/garages/", UserController.findAllGarages);
  app.get("/api/garages/:id", UserController.findOneSingleGarage);
  app.put("/api/garages/update/:id", UserController.updateExistingGarage);
  app.post("/api/garages/new", UserController.createGarage);
  app.delete("/api/garages/delete/:id", UserController.deleteAnExistingGarage);
};