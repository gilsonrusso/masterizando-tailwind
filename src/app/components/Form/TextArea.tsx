import { ComponentProps } from 'react';

export interface TextareaProps extends ComponentProps<'textarea'> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className='min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-black shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 '
    ></textarea>
  );
};
