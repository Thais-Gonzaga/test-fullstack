import CustomersData from '@/components/customerData';
import CustomersStatus from '@/components/customerStatus';
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
    status: Status.DEACTIVE,
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
    status: Status.WAITING_APROVAL,
  },
];

function CustomersList() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
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
  );
}

export default CustomersList;
