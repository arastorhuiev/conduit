import clsx from 'clsx';
import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header: FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx('py-navItem hover:text-black/60 hover:no-underline', {
      'text-black/30': !isActive,
      'test-black/80': isActive,
    });

  return (
    <header>
      <nav className='px-2 py-4'>
        <div className='mx-auto max-w-screen-xl flex justify-between items-center'>
          <Link
            className='font-titillium text-conduit-green text-2xl mr-8'
            to='#'>
            conduit
          </Link>
          <ul className='pl-0 mb-0 list-none flex'>
            <li className='ml-4'>
              <NavLink to='#' className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li className='ml-4'>
              <NavLink to='/sign-in' className={navLinkClasses}>
                Sign in
              </NavLink>
            </li>
            <li className='ml-4'>
              <NavLink to='/sign-up' className={navLinkClasses}>
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
