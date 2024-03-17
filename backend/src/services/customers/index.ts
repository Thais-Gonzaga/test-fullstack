import Customer from '../../interface/customers';

let id = 0
let status = "Aguardando ativação"
class CustomersService {
public db:unknown[]

  constructor() {
    this.db = []
  }

  public async create(customer: Customer) {
    id += 1
    const result = this.db.push({...customer, id, status});
    return result
  }

  public async getAll() {
    id += 1
    const result = this.db;
    return result
  }

  public async getId(id: string) {
    console.log(id)
    // @ts-ignore
    const result = this.db.find((e)=> e.id === +id)
    console.log(result)
    return result
  }

}

export default CustomersService;