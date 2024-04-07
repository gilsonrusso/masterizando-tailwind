import { ElementType } from 'react';
import { GoChevronDown } from 'react-icons/go';

export interface NavItemProps {
  title: string;
  icon: ElementType;
}

export const NavItem = ({ title, icon: Icon }: NavItemProps) => {
  return (
    <nav className='space-y-0.5'>
      <a
        className='group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50'
        href='#'
      >
        <Icon className='h-5 w-5 text-zinc-500' />
        <span className='font-medium text-zinc-700 group-hover:text-violet-500'>
          {title}
        </span>
        <GoChevronDown className='ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400' />
      </a>
    </nav>
  );
};
