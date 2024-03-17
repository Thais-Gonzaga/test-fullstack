import { Router } from "express";
import CustomersController from "../../controllers/customers";

const router = Router()
const customers = new CustomersController();

router.post('/', customers.create)
router.get('/', customers.getAll)
router.get('/:id', customers.getId)

export default router