'use client';
import { GoChevronDown } from 'react-icons/go';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ReactNode } from 'react';

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export const Select = ({ placeholder, children, ...props }: SelectProps) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-black shadow-sm data-[placeholder]:text-zinc-600'>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <GoChevronDown className='h-5 w-5 text-zinc-500' />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side='bottom'
          sideOffset={8}
          position='popper'
          className='z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white'
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
