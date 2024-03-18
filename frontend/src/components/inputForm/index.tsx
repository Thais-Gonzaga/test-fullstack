import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Control, Path, FieldValues } from 'react-hook-form';
import InputMask from 'react-input-mask';

export enum Mask {
  PHONE = 'PHONE',
  INDIVIDUAL_TAXPAYER = 'INDIVIDUAL_TAXPAYER',
}

interface InputFormProps<TFieldValue extends FieldValues> {
  control: Control<TFieldValue>;
  fieldName: Path<TFieldValue>;
  placeHolder: string;
  mask?: Mask;
}

const masks = {
  [Mask.PHONE]: '(99) 99999-9999',
  [Mask.INDIVIDUAL_TAXPAYER]: '999.999.999-99',
};

export default function InputForm<TFieldValue extends FieldValues>({
  control,
  fieldName,
  placeHolder,
  mask,
}: InputFormProps<TFieldValue>) {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <InputMask
              placeholder={placeHolder}
              className="w-56"
              mask={mask ? masks[mask] : ''}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
