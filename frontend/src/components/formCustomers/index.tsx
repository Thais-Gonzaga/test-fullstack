import { zodResolver } from '@hookform/resolvers/zod';
import useSWRMutation from 'swr/mutation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Link, redirect } from 'react-router-dom';
import { fetcher, sendRequest } from '@/services/backend/fetcher';
import { Customers, Status } from '@/types';
import InputForm, { Mask } from '../inputForm';
import useSWR from 'swr';
import { useQuery } from '@/hooks/useQuery';
import { useEffect } from 'react';
import { validateIndividualTaxpayer } from '@/utils/validateIndividualTaxpayer';
import { validatePhone } from '@/utils/validatePhone';

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
      redirect('/');
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

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={data?.status}
              >
                <FormControl>
                  <SelectTrigger className="w-56">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={Status.ACTIVE}>Ativo</SelectItem>
                  <SelectItem value={Status.INACTIVE}>Inativo</SelectItem>
                  <SelectItem value={Status.DISABLED}>Desativado</SelectItem>
                  <SelectItem value={Status.WAITING_APPROVAL}>
                    Aguardando Aprovação
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
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
