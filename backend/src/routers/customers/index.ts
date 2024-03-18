import { Router } from "express";
import CustomersController from "../../controllers/customers";
import validateForms from "../../middlewares/validateForms";
import validateEmail from "../../middlewares/validateEmail";

const router = Router();
const customers = new CustomersController();

router.get("/", customers.getAll);
router.get("/:id", customers.getId);
router.post("/", validateForms, validateEmail, customers.create);
router.put("/:id", validateForms, validateEmail, customers.update);

export default router;
