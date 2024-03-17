import { Repository } from "typeorm";
import { AppDataSource } from "../../database";
import CustomerType from "../../interface/customers";
import { Customer } from "../../models/Customers.entity";

class CustomersService {
  public repository: Repository<Customer>;

  constructor() {
    this.repository = AppDataSource.getRepository(Customer);
  }

  public async create(customer: CustomerType) {
    const { email } = customer;
    const result = await this.repository.save(customer);
    return this.repository.findOne({ where: { email } });
  }

  public async getAll() {
    const result = await this.repository.find();
    return result;
  }

  public async getId(id: string) {
    const result = await this.repository.findOneBy({ id });
    console.log(result);
    return result;
  }
}

export default CustomersService;
