export type CustomerData = {
  text: string;
  subText: string;
};
export type CustomerStatus = {
  status: Status;
};

export enum Status {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  INACTIVE = 'INACTIVE',
  WAITING_APPROVAL = 'WAITING_APPROVAL',
}

export type Customers = {
  id?: string;
  name: string;
  email: string;
  individualTaxpayer: string;
  phone: string;
  status: Status;
};
