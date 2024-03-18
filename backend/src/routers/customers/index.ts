import { Router } from "express";
import CustomersController from "../../controllers/customers";
import validateForms from "../../middlewares/validateForms";

const router = Router();
const customers = new CustomersController();

router.get("/", customers.getAll);
router.get("/:id", customers.getId);
router.post("/", validateForms, customers.create);
router.put("/:id", validateForms, customers.update);

export default router;
