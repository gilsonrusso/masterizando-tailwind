import { CiFlag1, CiHome, CiSearch, CiSquareCheck } from 'react-icons/ci';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { LuSquareStack } from 'react-icons/lu';
import { PiLifebuoy, PiUsers } from 'react-icons/pi';
import { TbAntennaBars5 } from 'react-icons/tb';
import { Input } from '../Input';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { Profile } from './Profile';
import { UsedSpaceWidget } from './UsedSpaceWidget';

export const Sidebar = () => {
  return (
    <aside className='fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-r border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8'>
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <CiSearch className='h-5 w-5 text-zinc-500' />
        </Input.Prefix>
        <Input.Control placeholder='Search' />
      </Input.Root>
      <nav className='space-y-0.5'>
        <NavItem title='Home' icon={CiHome} />
        <NavItem title='Dashboard' icon={TbAntennaBars5} />
        <NavItem title='Projects' icon={LuSquareStack} />
        <NavItem title='Tasks' icon={CiSquareCheck} />
        <NavItem title='Reporting' icon={CiFlag1} />
        <NavItem title='Users' icon={PiUsers} />
      </nav>
      <div className='mt-auto flex flex-col gap-6'>
        <nav className='space-y-0.5'>
          <NavItem title='Support' icon={PiLifebuoy} />
          <NavItem title='Settings' icon={HiOutlineCog6Tooth} />
        </nav>
      </div>
      <UsedSpaceWidget />
      <div className='h-px bg-zinc-200'></div>
      <Profile />
    </aside>
  );
};
