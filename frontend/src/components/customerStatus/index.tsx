import { Status, CustomerStatus } from '@/types';

const statusFormat = {
  [Status.ACTIVE]: { color: 'bg-[#52ad5b]', label: 'Ativo' },
  [Status.DISABLED]: { color: 'bg-[#D2D2D2]', label: 'Desativado' },
  [Status.INACTIVE]: { color: 'bg-[#D74640]', label: 'Inativo' },
  [Status.WAITING_APPROVAL]: {
    color: 'bg-[#D3A824]',
    label: 'Aguardando ativação',
  },
};

function CustomersStatus({ status }: CustomerStatus) {
  const { color, label } = statusFormat[status];
  return (
    <div className="flex items-center w-[25%] max-[663px]:w-full">
      <div className={`rounded-full ${color} h-5 w-5 mr-2`} />
      <p className="text-slate-500 break-words">{label}</p>
    </div>
  );
}

export default CustomersStatus;

// const statusColor = {
//   [Status.ACTIVE]: 'bg-active-green',
//   [Status.DISABLED]: 'bg-disabled-gray',
//   [Status.INACTIVE]: 'bg-inactive-red',
//   [Status.WAITING_APPROVAL]: 'bg-waiting-yellow',
// };
