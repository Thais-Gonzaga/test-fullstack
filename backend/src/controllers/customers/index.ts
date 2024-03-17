import { Request, Response } from 'express';
import CustomersService from '../../services/customers';
import statusCodes from '../../utils/statusCodes';

class CustomersController {
  private customersService: CustomersService;

  constructor() {
    this.customersService = new CustomersService();
  }

  public create = async (req: Request, res: Response) => {
    const customer = req.body;
     await this.customersService.create(customer)
    res.status(statusCodes.CREATED).json();
  };

  public getAll = async (_req: Request, res: Response) => {
    const customers = await this.customersService.getAll();
    res.status(statusCodes.OK).json(customers);
  }

  public getId = async (req: Request, res: Response) => {
    const { id } = req.params
    const customer = await this.customersService.getId(id);
    res.status(statusCodes.OK).json(customer);
  }

  
}

export default CustomersController ;