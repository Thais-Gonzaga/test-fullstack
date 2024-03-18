import CustomersData from '@/components/customerData';
import CustomersStatus from '@/components/customerStatus';
import HeaderCustomers from '@/components/headerCustomers';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { fetcher } from '@/services/backend/fetcher';
import { Customers } from '@/types';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

function CustomersList() {
  const { data = [] } = useSWR<Customers[]>('/customers', fetcher);
  console.log(data);
  return (
    <div className="flex-col w-[90%] max-[663px]:w-full m-auto">
      <HeaderCustomers />
      <div className="flex px-8 mx-auto mt-16 justify-between">
        <CustomersData
          className="w-auto"
          text="Listagem de usuários"
          subText="Escolha um cliente para visualizar os detalhes"
        />
        <div className="pr-6 lg:pr-48">
          <Button asChild variant="secondary" size="sm">
            <Link to="/customers">Novo cliente</Link>
          </Button>
        </div>
      </div>
      <div className="p-6 mx-auto space-y-4">
        {data.map(({ name, individualTaxpayer, email, phone, status, id }) => (
          <Card
            key={id}
            className="flex justify-around items-center min-h-20 max-[663px]:flex-col max-[663px]:p-3"
          >
            <CustomersData text={name} subText={email} />
            <CustomersData text={individualTaxpayer} subText={phone} />
            <CustomersStatus status={status} />
            <div className="flex w-[20%] lg:w-[15%]">
              <Button asChild variant="outline" size="lg">
                <Link to={`/customers?edit=true&id=${id}`}>Editar</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CustomersList;
