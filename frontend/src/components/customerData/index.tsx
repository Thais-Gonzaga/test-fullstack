import { CustomerData } from '@/types';

function CustomersData({ text, subText }: CustomerData) {
  return (
    <div>
      <h4>{text}</h4>
      <p className="text-slate-500">{subText}</p>
    </div>
  );
}

export default CustomersData;
