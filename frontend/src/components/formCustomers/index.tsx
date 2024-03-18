import { zodResolver } from '@hookform/resolvers/zod';
import useSWRMutation from 'swr/mutation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Link, useNavigate } from 'react-router-dom';
import { fetcher, sendRequest } from '@/services/backend/fetcher';
import { Customers, Status } from '@/types';
import InputForm, { Mask } from '../inputForm';
import useSWR from 'swr';
import { useQuery } from '@/hooks/useQuery';
import { useEffect } from 'react';
import { validateIndividualTaxpayer } from '@/utils/validateIndividualTaxpayer';
import { validatePhone } from '@/utils/validatePhone';
import SelectForm from '../selectForm';

export const FormSchema = z.object({
  name: z.string().min(1, {
    message: 'Digite o nome do cliente.',
  }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z
    .string()
    .min(1, {
      message: 'Digite o telefone do cliente.',
    })
    .refine((value) => validatePhone(value), {
      message: 'Número de telefone inválido',
    }),
  individualTaxpayer: z
    .string()
    .min(1, {
      message: 'Digite CPF do cliente.',
    })
    .refine((value) => validateIndividualTaxpayer(value), {
      message: 'CPF inválido',
    }),
  status: z.nativeEnum(Status),
});
const defaultFields = {
  name: '',
  email: '',
  individualTaxpayer: '',
  phone: '',
  status: Status.WAITING_APPROVAL,
};

function FormCustomers() {
  const navigate = useNavigate();
  const query = useQuery();
  const id = query.get('id') ?? '';
  const url = `/customers/${id}`;
  const { trigger, isMutating } = useSWRMutation(
    `/customers/${id}`,
    sendRequest(id ? 'PUT' : 'POST'),
  );
  const { data, isLoading } = useSWR<Customers>(id ? url : null, fetcher);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultFields,
    shouldFocusError: false,
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await trigger(data);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    form.setValue('name', data?.name ?? '');
    form.setValue('email', data?.email ?? '');
    form.setValue('individualTaxpayer', data?.individualTaxpayer ?? '');
    form.setValue('phone', data?.phone ?? '');
    form.setValue('status', data?.status ?? Status.WAITING_APPROVAL);
  }, [data]);

  if (isLoading) return <p>AGUARDE!</p>;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 ml-4"
      >
        <InputForm control={form.control} fieldName="name" placeHolder="Nome" />
        <InputForm
          control={form.control}
          fieldName="email"
          placeHolder="E-mail"
        />
        <InputForm
          control={form.control}
          fieldName="individualTaxpayer"
          placeHolder="CPF"
          mask={Mask.INDIVIDUAL_TAXPAYER}
        />
        <InputForm
          control={form.control}
          fieldName="phone"
          placeHolder="Telefone"
          mask={Mask.PHONE}
        />
        <SelectForm
          control={form.control}
          fieldName="status"
          placeHolder="Status"
          defaultValue={data?.status}
        />

        <div>
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            disabled={isMutating}
            className="mr-6 max-[663px]:mb-3"
          >
            {id ? 'Editar' : 'Criar'}
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/">Voltar</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default FormCustomers;
