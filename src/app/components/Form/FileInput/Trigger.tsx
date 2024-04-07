'use client';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { useFileInput } from './Root';

export const Trigger = () => {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className='hover:bg-violet-25 flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200'
    >
      <div className='rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 hover:border-violet-50 hover:bg-violet-100'>
        <MdOutlineCloudUpload className='h-5 w-5 rounded-full text-zinc-600 group-hover:bg-violet-500' />
      </div>
      <div className='flex flex-col items-center gap-1 hover:text-violet-500'>
        <span className='text-sm'>
          <span className='font-semibold text-violet-500'>Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className='text-xs'>SVG, PNG JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
};
