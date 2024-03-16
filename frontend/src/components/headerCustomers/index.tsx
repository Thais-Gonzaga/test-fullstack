import { User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
function HeaderCustomers() {
  return (
    <>
      <div className="flex space-x-4 justify-start items-center mt-20 ml-9">
        <User size={34} />
        <h1 className="text-2xl">Painel de clientes</h1>
      </div>
      <Separator className="my-4" />
    </>
  );
}

export default HeaderCustomers;
