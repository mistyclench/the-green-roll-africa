'use client';
import Logo from './logo';
import { lato } from '@/app/ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Form } from 'react-bootstrap';
import { Button } from './button';
import Image from 'next/image';

const links = [
  {
    name: 'About Us',
    href: '/#',
  },
  {
    name: 'Business',
    href: '/#',
  },
  {
    name: 'Foundation',
    href: '/#',
  },
  { name: 'Contact Us', href: '/#' },
];
export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      <section className="newsletter mx-auto py-12 md:ml-24 sm:ml-12 xs:ml-12">
        <div className="m-auto flex py-12">
          <div className="justified-center font-poppins inline-block h-[300px] xs:w-10/12 lg:w-10/12 md:w-10/12 sm:w-10/12 w-10/12 rounded-b-2xl rounded-tl-3xl rounded-tl-[100px] rounded-tr-2xl bg-purple-300/10 object-center text-center font-semibold text-black py-12">
            <p className="mx-auto w-2/3 p-4 text-2xl">
              Subscribe to get information, latest news and other interesting
              offers about The Greenroll Africa
            </p>
            <div className="row justified-center objects-center m-auto flex flex-row text-center">
              <Form className="mx-auto flex flex-row row">
                <Form.Control type="email" placeholder="Your email" />
                <Button className="bg-green-900 rounded-[7px] mx-4">Subscribe</Button>
                </Form>
            </div>
          </div>
          <Image className="-m-8 h-[70px]" width={70} height={70} alt="" src="/group-77.svg" />
        </div>
      </section>

      <footer className="footer font-poppins text-left text-xl text-white">
        <div className="row flex flex-row justify-between h-[170px]">
          <Image
            className="max-h-[100px]"
            alt=""
            width={100}
            height={100}
            src="/the-green-roll-logo@2x.png"
          />

          {/* <img
  className="w-[162px] h-[207px] opacity-[0.4]"
  alt=""
  src="/decore.svg"
/> */}
          <div className="row flex w-8/12 flex-row">
            <div className="w-4/12 text-black">
              <b className="block text-2xl">Company</b>
              <div className="block font-medium">About</div>
              <div className="block font-medium">Careers</div>
              <div className="inline-block h-[22px] w-[62px] font-medium leading-[22px]">
                Mobile
              </div>
            </div>
            <div className="w-4/12 text-black">
              <b className="block text-2xl">Contact</b>
              <div className="block font-medium">Help/FAQ</div>
              <div className="block font-medium">Press</div>
              <div className="block font-medium">Affilates</div>
            </div>
            <div className="w-4/12 text-black">
              <b className="block text-2xl">More</b>
              <div className="block font-medium">For Business</div>
              <div className="block font-medium">Foundation</div>
              <div className="block font-medium">Blog</div>
            </div>
            <div className="text-slate-500">
              <Image className="" width={237} height={100} alt="" src="/social.svg" />
          </div>
          </div>
        </div>
        <div className="text-slate-500 mb-0 block text-center text-sm font-medium">
          All rights reserved@thegreenrollafrica.com
        </div>
      </footer>
    </>
  );
}
