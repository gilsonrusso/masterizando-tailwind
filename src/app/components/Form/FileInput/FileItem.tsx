import { formatBits } from '@/app/utils/formatByts';
import { BiCheckCircle } from 'react-icons/bi';
import { IoIosTrash } from 'react-icons/io';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { tv, VariantProps } from 'tailwind-variants';
import { Button } from '../../Button';

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 p-2 text-violet-600',
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container: 'bg-red-25 border-red-300',
        icon: 'border-red-50 bg-red-100 text-red-600',
        deleteButton: 'text-red-900, hover:text-red-900',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
});

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

type TState = 'complete' | 'error' | 'progress';

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state });

  return (
    <div className={container()}>
      <div className={icon()}>
        <MdOutlineCloudUpload className='h-4 w-4' />
      </div>

      {state === 'error' ? (
        <div className='flex flex-1 flex-col items-start gap-1'>
          <div className='flex flex-col'>
            <span className='text-sm font-medium text-red-700'>
              Upload failed, please try again.
            </span>
            <span className='text-sm text-red-600'>{name}</span>
          </div>

          <button
            type='button'
            className='text-sm font-semibold hover:text-red-900'
          >
            Try again
          </button>
        </div>
      ) : (
        <div className='flex flex-1 flex-col items-start gap-1'>
          <div className='flex flex-col'>
            <span className='text-sm font-medium text-zinc-700'>{name}</span>
            <span className='text-sm text-zinc-500'>{formatBits(size)}</span>
          </div>

          <div className='flex w-full items-center gap-3'>
            <div className='h-2 flex-1 rounded-full bg-zinc-100'>
              <div
                className='h-2 rounded-full bg-violet-600'
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              ></div>
            </div>
            <span className='text-sm font-medium text-zinc-700'>
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <BiCheckCircle className='h-5 w-5 fill-violet-600 text-white' />
      ) : (
        <Button type='button' variant='ghost' className={deleteButton()}>
          <IoIosTrash className='h-5 w-5' />
        </Button>
      )}
    </div>
  );
}
