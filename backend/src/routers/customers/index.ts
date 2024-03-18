import { Router } from "express";
import CustomersController from "../../controllers/customers";

const router = Router();
const customers = new CustomersController();

router.get("/", customers.getAll);
router.get("/:id", customers.getId);
router.post("/", customers.create);
router.put("/:id", customers.update);

export default router;
