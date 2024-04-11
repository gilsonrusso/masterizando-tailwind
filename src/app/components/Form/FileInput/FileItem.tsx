import { formatBits } from '@/app/utils/formatByts';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { Button } from '../../Button';
import { IoIosTrash } from 'react-icons/io';

export interface FileItemProps {
  name: string;
  size: number;
}

export function FileItem({ name, size }: FileItemProps) {
  return (
    <div className='group flex items-start gap-4 rounded-lg border border-zinc-200 p-4'>
      <div className='rounded-full border-4 border-violet-100 p-2 text-violet-600'>
        <MdOutlineCloudUpload className='h-4 w-4' />
      </div>

      <div className='flex flex-1 flex-col items-start gap-1'>
        <div className='flex flex-col'>
          <span className='text-sm font-medium text-zinc-700'>{name}</span>
          <span className='text-sm text-zinc-500'>{formatBits(size)}</span>
        </div>

        <div className='flex w-full items-center gap-3'>
          <div className='h-2 flex-1 rounded-full bg-zinc-100'>
            <div className='h-2 w-4/5 rounded-full bg-violet-600'></div>
          </div>
          <span className='text-sm font-medium text-zinc-700'>80%</span>
        </div>
      </div>
      <Button variant='ghost'>
        <IoIosTrash className='h-5 w-5 text-zinc-500' />
      </Button>
    </div>
  );
}
