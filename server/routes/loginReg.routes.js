const LoginRegController = require("../controllers/loginReg.controller");

module.exports = app => {
  app.post("/api/users/login", LoginRegController.loginUser);
  
};