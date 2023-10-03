const { Router } = require("express");
const controllers = require("../controllers/index")
const { validateModel } = require("../middlewares");

const router = Router();


router.get("/database/:model", validateModel, controllers.getModels);

router.get("/database/:model/:id", validateModel, controllers.getModelsId);

module.exports = router;