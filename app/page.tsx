/* eslint-disable react/jsx-key */
import HomeNav from './ui/home-nav';
import Butt from './ui/butt-emoticon';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import CallToActionCard from '../app/components/CallToActionCard';
import truncateText from '../app/utils';
import { articles, singleArticle } from '../app/utils/articles';
import { Button } from './ui/button';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="p0 flex h-10 shrink-0 flex-row bg-[#0E5458] md:h-10">
        <HomeNav />
      </div>

      <section className="Hero">
        <label
          className="text-31xl py-auto flex h-[174.3px] cursor-pointer justify-center text-white"
          htmlFor="hero-txt"
        >
          <div className="align-center inline-block w-32 content-center text-center text-xl font-medium [transform:_rotate(-357deg)]">
            We don&apos;t only care about your
          </div>
          <Butt />
          <div className="align-center inline-block w-36 content-center text-center text-xl font-medium">
            we care for the environment
          </div>
        </label>
        <div className="green border-[#707070]] mx-auto box-border h-20 max-w-xl rounded-[60px] border-[1px] border-solid">
          <div className="font-large row flex flex-row">
            <div className="text justify-center px-2 py-4 text-center text-white">
              <p className="">WANT TO BE A DISTRIBUTOR?</p>
              <p className="">WANT TO BE A VOLUNTEER FOR OUR FOUNDATION?</p>
            </div>
            <div className="objects-center content-center justify-center px-2 text-center">
              <Button
              // disableElevation={true}
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="font-volkhov mt-60 h-[130px] text-black"
        id="section-card"
      >
        <div className=" green border-[#707070]] min-w-8 mx-auto box-border h-20 w-8/12 rounded-[27px] border-[1px] border-solid">
          <div className="font-large row align-center objects-center flex flex-row content-center justify-center text-center">
            <div className="bg-darkcyan align-center objects-center h-[130px] content-center justify-center rounded-[17px] text-center" />
            <div className="row m-1 ml-2 flex max-w-xs flex-row">
              <img
                className="max-h-[70px] max-w-[70px] rounded-[107px] bg-white p-2"
                alt=""
                src="/impacticon-lives.svg"
              />
              <b className="inline-block">for humans</b>
            </div>
            <div className="row m-1 flex max-w-xs flex-row">
              <img
                className="max-h-[70px] max-w-[70px] rounded-[107px] bg-white p-2"
                alt=""
                src="/planet.svg"
              />
              <b className="inline-block">for the planet</b>
            </div>
            <div className="row m-1 flex max-w-sm flex-row">
              <img
                className="max-h-[70px] max-w-[70px] rounded-[107px] bg-white p-2"
                alt=""
                src="/butt.svg"
              />
              <b className="text-black">for your bum</b>
            </div>
            <div className="row m-1 flex max-w-xs flex-row">
              <img
                className="max-h-[70px] max-w-[70px] rounded-[107px] bg-white"
                alt=""
                src="/mask-group-1.svg"
              />
              <b className="">for your feelings</b>
            </div>
          </div>
        </div>
        <Button
          className="mx-auto my-1 bg-[#DF6951]"
          // disableElevation={true}
        >
          Discover why
        </Button>
      </section>
      <section className="testimonials"></section>
      <section
        className="text-13xl font-poppins h-[806px] text-left text-black"
        id="mission"
      >
        <div className="text-31xl text-orangered text-laft text-orange font-semibold">
          Our mission: Let's make the world less shitty
        </div>
        <div className="inline-block h-48 font-semibold">
          We are convinced that you can do a lot more with toilet paper than
          wiping your bum. All our products are made of
          environmentally-friendly, raw materials, and we donate 50% of our net
          profit to the building of sanitary facilities for those in need.
        </div>
        <div className="text-darkorange font-semibold">
          We make serious impact
        </div>
        <div className="bg-darkcyan green font-volkhov row mx-auto flex h-[70px] w-80 flex-row rounded-[17px] text-center text-gray-100">
          <div className="row flex flex-row">
            <img
              className="h-[50px] w-[50px] rounded-[107px] bg-white p-2"
              alt=""
              src="/impacticon-trees.svg"
            />
            <div className="text-left">
              <p className="">42353</p>
              <b className="font-segoe-ui text-orange=800">trees saved</b>
            </div>
          </div>
          <div className="row flex flex-row">
            <img
              className="h-[50px] w-[50px] rounded-[107px] bg-white p-2"
              alt=""
              src="/impacticon-toilets.svg"
            />
            <div className="text-left">
              <b className="">233</b>
              <b className="font-segoe-ui text-orangered inline-block h-[33px] w-[178px] text-left">
                toilets built
              </b>
            </div>
          </div>
          <div className="row flex flex-row">
            <img
              className="h-[50px] w-[50px] rounded-[107px] bg-white p-2"
              alt=""
              src="/impacticon-lives.svg"
            />
            <div className="text-left">
              <b className="">193150</b>
              <b className="font-segoe-ui text-orangered inline-block h-[33px] w-[219px] text-left">
                lives improved
              </b>
            </div>
          </div>
        </div>

        <div className="font-segoe-ui border-dimgray row box-border flex h-[50px] max-h-[100px] w-[350px] w-auto max-w-[350px] flex-row justify-center align-center text-center objects-center m-auto rounded-[93px] border-[1px] border-solid bg-white my-2">
          <div className="bg-khaki border-dimgray row flex h-full w-[350px] max-w-[500px] flex-row rounded-[98px] border-[1px] border-solid p-1">
            <div className='py-1'>
            <span>More about</span>
            <b> our mission?</b>
            </div>
            <Button className="bg-[#FFDC63]">{`Read more >`}</Button>
          </div>
        </div>
        <img className="float-right" alt="" src="/decore1.svg" />
        <img className="" alt="" src="/decore2.svg" />
      </section>
    </main>
  );
}
