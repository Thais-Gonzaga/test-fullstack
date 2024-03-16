import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const mocklist = [
  {
    name: 'John',
    email: 'John@email.com',
    individualTaxpayer: '12345678900',
    phone: '12345678900',
    status: 'Ativo',
  },
  {
    name: 'John',
    email: 'John@email.com',
    individualTaxpayer: '13345678900',
    phone: '12345678900',
    status: 'Ativo',
  },
  {
    name: 'John',
    email: 'John@email.com',
    individualTaxpayer: '14345678900',
    phone: '12345678900',
    status: 'Ativo',
  },
];

function CustomersList() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      {mocklist.map((customer) => (
        <Card
          key={customer.individualTaxpayer}
          className="flex justify-around items-center"
        >
          <div>
            <h4>{customer.name}</h4>
            <p>{customer.email}</p>
          </div>
          <div>
            <h4>{customer.individualTaxpayer}</h4>
            <p>{customer.email}</p>
          </div>
          <div>{customer.status}</div>
          <div>
            <Button variant="outline">Editar</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CustomersList;
