'use client';
import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from './Root';

type ControlProps = ComponentProps<'input'>;

export const Control = ({ multiple = false, ...props }: ControlProps) => {
  const { id, onFilesSelected } = useFileInput();

  function handlerFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);
    onFilesSelected(files, multiple);
  }

  return (
    <input
      type='file'
      className='sr-only'
      id={id}
      multiple={multiple}
      onChange={handlerFilesSelected}
      {...props}
    />
  );
};
