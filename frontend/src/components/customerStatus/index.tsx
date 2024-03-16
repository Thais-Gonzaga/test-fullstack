import { Status, CustomerStatus } from '@/types';

const statusCollor = {
  [Status.ACTIVE]: 'bg-[#52ad5b]',
  [Status.DEACTIVE]: 'bg-[#D2D2D2]',
  [Status.INACTIVE]: 'bg-[#D74640]',
  [Status.WAITING_APROVAL]: 'bg-[#D3A824]',
};
// const statusCollor = {
//   [Status.ACTIVE]: 'bg-active-green',
//   [Status.DEACTIVE]: 'bg-deactive-gray',
//   [Status.INACTIVE]: 'bg-inactive-red',
//   [Status.WAITING_APROVAL]: 'bg-waiting-yellow',
// };

function CustomersStatus({ status }: CustomerStatus) {
  const color = statusCollor?.[status];
  return (
    <div className="flex justify-around ">
      <div className={`rounded-full ${color} h-5 w-5`} />
      <span className="text-slate-500">{status}</span>
    </div>
  );
}

export default CustomersStatus;
