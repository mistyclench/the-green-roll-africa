import Link from 'next/link';
import Image from 'next/image';


export default function Logo() {
  return (
    <>
      <Link 
        key='Home' 
        href='/'
        className='flex flex-row divide-violet-950 divide-x-2'          
      >
      <div className=''>
          <Image
          src="/the-green-roll-logo@2x.png"
          width={70}
          height={70}
          className="block items-center p-1 mt-2"
          alt="The Green Roll Logo"
          />
      </div>
        </Link>
        </>
  );
}
