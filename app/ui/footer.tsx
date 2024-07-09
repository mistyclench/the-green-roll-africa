'use client';
import Logo from './logo';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Form } from 'react-bootstrap';
import { Button } from './button';

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
      <section className="newsletter mx-auto py-12">
        <div className="m-auto flex py-12">
          <div className="justified-center font-poppins inline-block h-[300px] w-10/12 rounded-b-2xl rounded-tl-3xl rounded-tl-[100px] rounded-tr-2xl bg-purple-300/10 object-center text-center font-semibold text-black py-12">
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
          <img className="-m-8 h-[70px] w-[70px]" alt="" src="/group-77.svg" />
        </div>
      </section>

      <footer className="footer font-poppins text-left text-xl text-white">
        <div className="row flex flex-row justify-between">
          <img
            className="max-h-full max-w-full object-cover"
            alt=""
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
              <div className="blockfont-medium">Affilates</div>
            </div>
            <div className="w-4/12 text-black">
              <b className="block text-2xl">More</b>
              <div className="block font-medium">For Business</div>
              <div className="block font-medium">Foundation</div>
              <div className="block font-medium">Blog</div>
            </div>
            <div className="text-slate-500">
              <img className="w-[237px]" alt="" src="/social.svg" />
          </div>
          </div>
        </div>
        <div className="text-slategray mb-0 block text-center text-sm font-medium">
          All rights reserved@thegreenrollafrica.com
        </div>
      </footer>
    </>
  );
}
