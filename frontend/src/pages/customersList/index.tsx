import CustomersData from '@/components/customerData';
import CustomersStatus from '@/components/customerStatus';
import HeaderCustomers from '@/components/headerCustomers';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { fetcher } from '@/services/backend/fetcher';
import { Customers } from '@/types';
import useSWR from 'swr';

function CustomersList() {
  const { data = [] } = useSWR<Customers[]>('/customers', fetcher);
  console.log(data);
  return (
    <div className="flex-col min-w-4xl ">
      <HeaderCustomers />
      <div className="p-6 mx-auto  space-y-4">
        {data.map(({ name, individualTaxpayer, email, phone, status }) => (
          <Card
            key={individualTaxpayer}
            className="flex justify-around items-center"
          >
            <CustomersData text={name} subText={email} />
            <CustomersData text={individualTaxpayer} subText={phone} />
            <CustomersStatus status={status} />
            <div>
              <Button variant="outline">Editar</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CustomersList;
