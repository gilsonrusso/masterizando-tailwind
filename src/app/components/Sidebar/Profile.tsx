import { IoIosLogOut } from 'react-icons/io';
import { Button } from '../Button';

export const Profile = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <div className='grid grid-cols-profile items-center gap-3'>
      <img
        src='https://github.com/gilsonrusso.png'
        alt='foto_user'
        className='w-18 h-10 rounded-full'
      />
      <div className='flex flex-col truncate'>
        <span className='text-sm font-semibold text-zinc-700'>
          Gilson Russo
        </span>
        <span className='truncate text-sm text-zinc-500 '>
          gilsonrusso@outlook.com
        </span>
      </div>
      <Button type='button' variant='ghost'>
        <IoIosLogOut className='h-5 w-5 text-zinc-500' />
      </Button>
    </div>
  );
};
