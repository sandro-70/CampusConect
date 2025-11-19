var express = require("express");
var router = express.Router();
import usuarioController from "../controllers/usuarios_controller";

const usuarioController = require("../controllers/usuarios_controller");

router.post("/createNewUser", usuarioController.createNewUser);
router.get("/getAllUsers", usuarioController.getAllUsers);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
