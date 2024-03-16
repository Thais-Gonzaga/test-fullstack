export type CustomerData = {
  text: string;
  subText: string;
};
export type CustomerStatus = {
  status: Status;
};

export enum Status {
  ACTIVE = 'ACTIVE',
  DEACTIVE = 'DEACTIVE',
  INACTIVE = 'INACTIVE',
  WAITING_APROVAL = 'WAITING_APROVAL',
}
