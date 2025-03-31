'use client';

import * as React from 'react';
import { X, Check, ChevronsUpDown } from 'lucide-react';
import { type Control, useController } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandItem, CommandList, CommandEmpty, CommandGroup, CommandInput } from '@/components/ui/command';

interface AutocompleteInputProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  emptyMessage?: string;
  onChange?: (values: string[]) => void;
  defaultValues?: string[];
  name?: string;
  control?: Control<any>;
  rules?: Record<string, any>;
}

export function AutocompleteInput({
  options,
  placeholder = 'Select items...',
  emptyMessage = 'No results found.',
  onChange,
  defaultValues = [],
  name,
  control,
  rules,
}: AutocompleteInputProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  // For uncontrolled mode
  const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValues);

  // Use react-hook-form controller if control is provided
  const isControlled = !!control && !!name;

  const { field } = useController({
    name: name || 'autocomplete', // Provide a default name
    control,
    rules,
    defaultValue: defaultValues,
    disabled: !isControlled, // Disable the controller if not controlled
  });

  // Get the current value (either from form control or local state)
  const currentValues = React.useMemo(
    () => (isControlled ? field.value || [] : selectedValues),
    [isControlled, field.value, selectedValues],
  );

  const handleSelect = React.useCallback(
    (value: string) => {
      const newValues =
        currentValues.includes(value) ? currentValues.filter((item) => item !== value) : [...currentValues, value];

      if (isControlled) {
        field.onChange(newValues);
      } else {
        setSelectedValues(newValues);
        onChange?.(newValues);
      }
    },
    [currentValues, field, isControlled, onChange],
  );

  const handleRemove = React.useCallback(
    (value: string) => {
      const newValues = currentValues.filter((item) => item !== value);

      if (isControlled) {
        field.onChange(newValues);
      } else {
        setSelectedValues(newValues);
        onChange?.(newValues);
      }
    },
    [currentValues, field, isControlled, onChange],
  );

  return (
    <div className="flex w-full flex-col gap-1.5">
      <Popover open={ open } onOpenChange={ setOpen }>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={ open }
            className="h-auto min-h-10 w-full justify-between"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              { currentValues.length === 0 ?
                <span className="text-muted-foreground">{ placeholder }</span>
              : currentValues.map((value) => {
                  const option = options.find((opt) => opt.value === value);
                  return (
                    <Badge key={ value } variant="secondary" className={ `flex items-center gap-1` }>
                      { option?.label }
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={ (e) => {
                          e.stopPropagation();
                          handleRemove(value);
                        } }
                      />
                    </Badge>
                  );
                })
              }
            </div>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search..." value={ inputValue } onValueChange={ setInputValue } />
            <CommandList>
              <CommandEmpty>{ emptyMessage }</CommandEmpty>
              <CommandGroup>
                { options.map((option) => (
                  <CommandItem
                    key={ option.value }
                    value={ option.value }
                    onSelect={ () => {
                      handleSelect(option.value);
                      setInputValue('');
                    } }
                  >
                    <Check
                      className={ cn('mr-2 h-4 w-4', currentValues.includes(option.value) ? `opacity-100` : `opacity-0`) }
                    />
                    { option.label }
                  </CommandItem>
                )) }
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
