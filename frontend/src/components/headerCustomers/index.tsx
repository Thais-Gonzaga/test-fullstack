import { User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
function HeaderCustomers() {
  return (
    <>
      <div className="flex m-4 mt-16 justify-start items-center">
        <User size={34} />
        <h1 className="text-2xl">Painel de clientes</h1>
      </div>
      <Separator className="my-4" />
    </>
  );
}

export default HeaderCustomers;
