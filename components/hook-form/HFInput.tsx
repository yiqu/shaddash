'use client';

import { FieldValues, ControllerRenderProps } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { FormItem, FormField, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';

interface HFInputFieldProps extends React.ComponentProps<'input'> {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  showFormMessage?: boolean;
}

export function HFInputField({
  control,
  name,
  label,
  placeholder,
  helperText,
  showFormMessage = true,
  ...inputProps
}: HFInputFieldProps) {
  return (
    <FormField
      control={ control }
      name={ name }
      render={ ({ field }: { field: ControllerRenderProps<FieldValues, string> }) => (
        <FormItem>
          { label ?
            <FormLabel>{ label }</FormLabel>
          : null }
          <FormControl>
            <Input placeholder={ placeholder } { ...field } { ...inputProps } />
          </FormControl>
          { helperText ?
            <FormDescription> { helperText }</FormDescription>
          : null }
          { showFormMessage ?
            <FormMessage />
          : null }
        </FormItem>
      ) }
    />
  );
}
