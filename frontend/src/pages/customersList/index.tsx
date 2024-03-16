import CustomersData from '@/components/customerData';
import CustomersStatus from '@/components/customerStatus';
import HeaderCustomers from '@/components/headerCustomers';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Status } from '@/types';

const mocklist = [
  {
    name: 'John',
    email: 'John@email.com',
    individualTaxpayer: '15345678900',
    phone: '11345618900',
    status: Status.ACTIVE,
  },
  {
    name: 'John',
    email: 'John@email.com',
    individualTaxpayer: '16345678900',
    phone: '12345628900',
    status: Status.DISABLED,
  },
  {
    name: 'John',
    email: 'John@email.com',
    individualTaxpayer: '17345678900',
    phone: '1345638900',
    status: Status.INACTIVE,
  },
  {
    name: 'John',
    email: 'John@email.com',
    individualTaxpayer: '18345678900',
    phone: '12345648900',
    status: Status.WAITING_APPROVAL,
  },
];

function CustomersList() {
  return (
    <div className="flex-col min-w-4xl ">
      <HeaderCustomers />
      <div className="p-6 mx-auto  space-y-4">
        {mocklist.map(({ name, individualTaxpayer, email, phone, status }) => (
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
