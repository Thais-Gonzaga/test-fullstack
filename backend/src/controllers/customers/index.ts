import { Request, Response, NextFunction } from "express";
import CustomersService from "../../services/customers";
import statusCodes from "../../utils/statusCodes";

class CustomersController {
  private customersService: CustomersService;

  constructor() {
    this.customersService = new CustomersService();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customer = req.body;
      await this.customersService.create(customer);
      res.status(statusCodes.CREATED).json(customer);
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (_req: Request, res: Response) => {
    const customers = await this.customersService.getAll();
    res.status(statusCodes.OK).json(customers);
  };

  public getId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const customer = await this.customersService.getId(id);
    res.status(statusCodes.OK).json(customer);
  };
  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const customer = await this.customersService.update(id, req.body);
    res.status(statusCodes.OK).json(customer);
  };
}

export default CustomersController;
