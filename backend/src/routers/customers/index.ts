import { Router } from "express";
import CustomersController from "../../controllers/customers";
import validateForms from "../../middlewares/validateForms";
import validateEmail from "../../middlewares/validateEmail";
import validateIndividualTaxpayer from "../../middlewares/validateIndividualTaxpayer";
import validatePhone from "../../middlewares/validatePhone";

const router = Router();
const customers = new CustomersController();

router.get("/", customers.getAll);
router.get("/:id", customers.getId);
router.post(
  "/",
  validateForms,
  validateEmail,
  validateIndividualTaxpayer,
  validatePhone,
  customers.create
);
router.put(
  "/:id",
  validateForms,
  validateEmail,
  validateIndividualTaxpayer,
  validatePhone,
  customers.update
);

export default router;
