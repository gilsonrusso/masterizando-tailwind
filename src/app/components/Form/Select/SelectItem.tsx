'use client';
import * as Select from '@radix-ui/react-select';
import { FaCheck } from 'react-icons/fa';

export type SelectItemProps = Select.SelectItemProps & {
  text: string;
};

export const SelectItem = ({ text, ...props }: SelectItemProps) => {
  return (
    <Select.Item
      className='flex items-center justify-between gap-2 px-3 py-2.5 text-black outline-none data-[highlighted]:bg-zinc-50'
      {...props}
    >
      <Select.ItemText>{text}</Select.ItemText>

      <Select.ItemIndicator>
        <FaCheck className='h-4 w-4 text-violet-500' />
      </Select.ItemIndicator>
    </Select.Item>
  );
};
