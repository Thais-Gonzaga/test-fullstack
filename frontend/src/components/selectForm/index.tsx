import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Control, Path, FieldValues } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Status } from '@/types';

interface SelectFormProps<TFieldValue extends FieldValues> {
  control: Control<TFieldValue>;
  fieldName: Path<TFieldValue>;
  placeHolder: string;
  defaultValue?: Status;
}

export default function SelectForm<TFieldValue extends FieldValues>({
  control,
  fieldName,
  placeHolder,
  defaultValue,
}: SelectFormProps<TFieldValue>) {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={defaultValue}>
            <FormControl>
              <SelectTrigger className="w-56">
                <SelectValue placeholder={placeHolder} />
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
  );
}
