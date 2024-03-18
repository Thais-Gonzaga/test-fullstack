import { Repository } from "typeorm";
import { AppDataSource } from "../../database";
import CustomerType from "../../interface/customers";
import { Customer } from "../../models/Customers.entity";

class CustomersService {
  public repository: Repository<Customer>;

  constructor() {
    this.repository = AppDataSource.getRepository(Customer);
  }

  public async checkIndividualTaxpayerExists(individualTaxpayer: string) {
    const checkCustomer = await this.repository.findOne({
      where: { individualTaxpayer },
    });

    if (checkCustomer)
      throw {
        message: "individual Taxpayer already exists",
        status: 409,
      };
  }

  public async create(customer: CustomerType) {
    const { individualTaxpayer, email } = customer;
    await this.checkIndividualTaxpayerExists(individualTaxpayer);
    await this.repository.save(customer);
    return this.repository.findOne({ where: { email } });
  }

  public async getAll() {
    const result = await this.repository.find();
    return result;
  }

  public async getId(id: string) {
    const result = await this.repository.findOneBy({ id });
    return result;
  }
  public async update(id: string, customer: CustomerType) {
    const result = await this.repository.update({ id }, customer);
    return result;
  }
}

export default CustomersService;
