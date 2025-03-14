/* eslint-disable readable-tailwind/multiline */
'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandItem, CommandList, CommandEmpty, CommandGroup, CommandInput } from '@/components/ui/command';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export function TeaSelectionComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('remix');

  return (
    <Popover open={ open } onOpenChange={ setOpen }>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={ open } className={ `w-[200px] justify-between` }>
          { value ?
            frameworks.find((framework) => framework.value === value)?.label
          : <span className="text-gray-500">Select framework...</span> }
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              { frameworks.map((framework) => (
                <CommandItem
                  key={ framework.value }
                  value={ framework.value }
                  onSelect={ (currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  } }
                  className={ cn(
                    "data-[selected=true]:bg-blue-50",
                    value === framework.value && "bg-blue-50"
                  ) }
                >
                  { framework.label }
                  <Check className={ cn('ml-auto', value === framework.value ? `opacity-100` : `opacity-0`) } />
                </CommandItem>
              )) }
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
