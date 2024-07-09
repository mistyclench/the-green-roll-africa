import { Form, Button as BsButton } from 'react-bootstrap';
import { Button } from '../ui/button';
import Image from 'next/image';
import Footer from '../ui/footer';

export default async function Page() {
  return (
    <main>
      <section className="hero">
        <div className="text-mid font-google-sans text-white ">
          <h2 className="text-3xl font-poppins my-2 ml-12 font-semibold">
            <p className="mb-12 ml-12 text-3xl">
              Let&apos;s make impact together!
            </p>
          </h2>
        </div>
        <div className="row flex flex-row justify-between px-12">
          <Image
            className="w-4/12 object-cover"
            width={200}
            height={200}
            alt=""
            src="/toilet-construction@2x.png"
          />
          <Image
            className="w-4/12 object-cover"
            width={200}
            height={200}
            alt=""
            src="/why-bamboo@2x.png"
          />
        </div>
      </section>

      <div className="font-poppins relative text-left text-3xl text-black">
        <div className="overflow-y-auto mix-blend-normal">
          <div className="">
            <section className="text-3xl font-lucida-sans-typewriter row flex flex-row text-center text-white">
              <div
                className="-p-1 z-0 m-1 w-4/12 rounded-[27px] bg-yellow-200"
                id="card-1"
              >
                <div className="" id="card-1">
                  <Image
                    className="absolute -z-50"
                    alt=""
                    width={383}
                    height={300}
                    src="/path-7.svg"
                  />
                </div>
                <div className="py-6">
                  <b className="my-4 inline-block [text-shadow:0px_3px_6px_rgba(0,_0,_0,_0.16)]">
                    Request our brochure!
                  </b>
                  <Button className="m-6 w-8/12 rounded-[107px] bg-[#F9A75D] text-base">
                    Request Brochure
                  </Button>
                </div>
              </div>
              <div
                className="-p-1 z-0 m-1 w-4/12 rounded-[27px] bg-yellow-200"
                id="card-2"
              >
                <div className="" id="card-2">
                  <Image
                    className="absolute -z-50 rounded-t-[27px]"
                    width={383}
                    height={300}
                    alt=""
                    src="/path-8.svg"
                  />
                </div>
                <div className="">
                  <b className="my-4 inline-block">
                    Create positive impact with your organisation!
                  </b>
                  <Button className="m-6 m-auto w-8/12 rounded-[107px] bg-[#F9A75D] text-base">
                    Create B2B Account
                  </Button>
                </div>
              </div>
              <div
                className="-p-1 z-0 m-1 w-4/12 rounded-[27px] bg-yellow-200"
                id="card-3"
              >
                <div className="" id="card-3">
                  <Image
                    className="absolute -z-50 rounded-t-[27px]"
                    width={383}
                    height={300}
                    alt=""
                    src="/path-9.svg"
                  />
                </div>
                <div className="py-6">
                  <b className="my-4 inline-block [text-shadow:0px_3px_6px_rgba(0,_0,_0,_0.16)]">
                    Already a partner?
                  </b>
                  <Button className="m-6 w-8/12 rounded-[107px] bg-[#F9A75D] text-base">
                    Signin
                  </Button>
                </div>
              </div>
            </section>
            <section className='py-4'>
              <div className="text-3xl">
                <h3 className="font-inherit m-0 font-semibold text-inherit">
                  The Green Roll Africa, who?
                </h3>
                <div className="text-2xl py-4">
                  <p className="m-0 font-semibold">
                    Sustainable entrepreneurship is increasingly becoming the
                    norm. An easy step to start with is responsible sourcing. By
                    using Green Roll toilet paper, you can make a major impact,
                    both socially and ecologically. Our products are 100%
                    sustainably sourced and half of our net profit goes to the
                    construction of toilets in developing countries.
                  </p>
                  <video className="mx-auto w-10/12 py-4" controls>
                    <source src="https://www.youtube.com/watch?v=9m964UpqJQM" />
                  </video>
                </div>
              </div>
            </section>
            <section>
            <div className="py-4">
            <h3 className="font-inherit m-0 font-semibold text-inherit">
                Our products
            </h3>
            <div className="text-2xl py-4">
                <p className="m-0 font-semibold">
                We are not just a toilet paper company. The Green Roll Africa
                produces 100% environmentally-friendly and sustainable toilet
                paper from bamboo.
              </p>
            </div>
            </div>
            </section>
            <section className="py-2">
            <h3 className="text-3xl font-inherit font-semibold py-2">
                Our impact
              </h3>
              <p className="m-0 inline-block font-semibold">
                <span className="block text-2xl">
                    Thanks to our partners, we can save even more trees, help
                    even more people, and build even more toilets. We are proud
                    to donate 50% of our net profit to maximize our impact.
                </span>
                <span className="block text-2xl">
                    Show who you are as a business and impress your customers,
                    business associates or staff. As a business customer, it is
                    possible to purchase sustainable toilet rolls with
                    personalized wrappers. In addition, our customers can see
                    how much impact they have made via a personal impact meter.
                    It calculates the number of saved trees, built toilets and
                    improved lives!
                </span>
                <span className="block text-2xl">
                 {`Hungry for more information about our projects? Take a look at our `}
                  <span className="text-palevioletred">
                    <span className="[text-decoration:underline] text-2xl">
                      impact report
                    </span>
                    .
                  </span>
                </span>
              </p>
            </section>
            <div className="py-4">
            <h3 className="text-3xl font-inherit m-0 font-semibold">
                Marketing support
              </h3>
              <p className="m-0 inline-block font-semibold py-2">
                <span className="block text-2xl">
                  We support our partners with signs to complete social media
                  expressions and posters. Our goal is to help you promote your
                  business in the most sustainable and social way possible!
                </span>
                <span className="block text-2xl">
                  We are happy with your contribution, you have a strong story
                  for your partners and customers, and do something good for a
                  better world. But above all we make an impact together!
                </span>
              </p>
            </div>
            <div className="py-4">
            <h3 className="text-3xl font-inherit m-0 font-semibold">
                Let&apos;s rock and roll!
              </h3>
              <p className="m-0 inline-block font-semibold py-2">
                <span className="block text-2xl">
                  At The Green Roll Africa, we&apos;re excited to make a
                  difference with you. Become a partner now and help us in our
                  mission to change the world, one roll at the time!
                </span>
                <span className="block text-2xl">
                  Whether you have a small yoga studio or a large multinational,
                  a store or a webshop, making the transition to The Green Roll
                  Africa is easy. We make custom rolls and wrappers for the
                  largest companies, but we also deliver to the greengrocer
                  around the corner with just as much love: because only
                  together can we make an impact!
                </span>
                <span className="block text-2xl">
                  Request the brochure and join The Green Roll Africa!
                </span>
                <span className="block">&nbsp;</span>
                <span className="block text-2xl">Wipe right, change lives</span>
              </p>
              <div className="text-red-900">
                <a className="font-semibold text-[inherit] [text-decoration:none]">
                  <p className="m-0">info@thegreenrollafrica.com</p>
                </a>
                <a className="font-semibold text-[inherit] [text-decoration:none]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">+233 24 444 4444</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
