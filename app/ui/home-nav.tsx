'use client'
import Logo from './logo';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const links = [
    {
      name: 'About Us',
      href: '/',
    },
    {
      name: 'Business',
      href: '/business',
    },
    {
      name: 'Foundation',
      href: '/#',
    },
    { name: 'Contact Us', 
    href: '/#',
 },
  ];
export default function HomeNav (){
    const pathname = usePathname();
    return (
        <div
        className={`${lusitana.className} flex flex-grow flex-row items-center leading-none text-white`}
        >
        <Logo />
        <div className='flex flex-row ms-auto items-start'>
        <div className='flex flex-row p-1'>
        {links.map((link) => {
            return (
        <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'grow gap-2 hover:text-orange-300 md:flex-none md:justify-start md:px-3',
                {
                  'text-orange-600': pathname === link.href,
                },
                )}  
          >
          <p className="hidden md:block">{link.name}</p>
          </Link>   
            );
        })}
        </div>
        </div>
        </div>
    );
}