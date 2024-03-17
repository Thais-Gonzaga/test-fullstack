import HeaderCustomers from '@/components/headerCustomers';
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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { sendRequest } from '@/services/backend/fetcher';
import { Status } from '@/types';
// import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  name: z.string().min(1, {
    message: 'Digite o nome do cliente.',
  }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(1, {
    message: 'Digite o telefone do cliente.',
  }),
  individualTaxpayer: z.string().min(1, {
    message: 'Digite CPF do cliente.',
  }),
  status: z.nativeEnum(Status),
});

function NewCustomer() {
  const { trigger, isMutating } = useSWRMutation('/customers', sendRequest);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      individualTaxpayer: '',
      phone: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const result = await trigger(data);
      console.log('result', result);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="flex-col min-w-4xl ">
      <HeaderCustomers />
      <div>
        <h1>Novo usuário</h1>
        <p>Informe os campos a seguir para novo usuário:</p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="individualTaxpayer"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="CPF" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Telefone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
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
            <Button type="submit" variant="secondary" disabled={isMutating}>
              Criar
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Voltar</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default NewCustomer;
