import { cn } from '@/lib/utils';
import { CustomerData } from '@/types';

function CustomersData({ text, subText, className }: CustomerData) {
  return (
    <div className={cn('flex flex-col w-[20%] max-[663px]:w-full', className)}>
      <h4>{text}</h4>
      <p className="text-slate-500 break-words">{subText}</p>
    </div>
  );
}

export default CustomersData;
