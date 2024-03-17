import { Status } from "../../types";

interface Customers {
  name: string;
  email: string;
  individualTaxpayer: string;
  phone: string;
  status: Status;
}

export default Customers;
