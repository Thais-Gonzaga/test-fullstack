import CustomersData from '@/components/customerData';
import FormCustomers from '@/components/formCustomers';
import HeaderCustomers from '@/components/headerCustomers';
import { useQuery } from '@/hooks/useQuery';

function Customer() {
  const query = useQuery();
  const isEdit = query.get('id');
  const title = isEdit ? 'Edite os dados do cliente' : 'Novo usuário';
  const subTitle = !isEdit
    ? 'Informe os campos a seguir para novo usuário:'
    : '';

  return (
    <div className="flex-col w-[80%] m-auto">
      <HeaderCustomers />
      <CustomersData
        text={title}
        subText={subTitle}
        className="w-full ml-4 mt-10 mb-16"
      />
      <FormCustomers />
    </div>
  );
}

export default Customer;
