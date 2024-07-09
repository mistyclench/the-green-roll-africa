/* eslint-disable react/jsx-key */
import HomeNav from './ui/home-nav';
import Butt from './ui/butt-emoticon';
import { Button } from './ui/button';
import TestimonialCard from './ui/testimonial-card';
import {testimonials} from './utils/testimonials';
import Footer from './ui/footer';


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

      <section className="section-card font-volkhov mt-60 h-[130px] text-black">
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
      <section className="testimonials py-2 mx-24">
        <h2 className="Reviews-header text-3xl text-white font-volkhov m-0 inline-block h-[65px] w-[315px] font-bold capitalize">
          Reviews
        </h2>
        <div className='flex flex-row row'>
        <p className="m-0 inline-block w-[816px] text-2xl text-white font-semibold">
          You don&apos;t have to believe us, but(t) this is what others think of The Green Roll Africa:
        </p>
        <img
          className="object-cover md:w-12 lg:w-24"
          alt=""
          src="/screenshot-20240618-091043removebgpreview@2x.png"
        />
        </div>
        <div className='flex flex-row row overflow-x-scroll py-4 testimonials-scroll'>
        {testimonials.map((testimonial) => {
          return (
        <TestimonialCard
        testimonial={testimonial.testimonial}
        client={testimonial.client}
        image={testimonial.image}
        />
          );
        })}

        </div>

      </section>
      <section
        className="text-13xl font-poppins text-center text-black"
        id="mission"
      >
        <div className="text-2xl font-semibold text-[#FF5800]">
          Our mission: Let&apos;s make the world less shitty
        </div>
        <div className="mx-12 my-2 inline-block w-auto text-left font-semibold">
          We are convinced that you can do a lot more with toilet paper than
          wiping your bum. All our products are made of
          environmentally-friendly, raw materials, and we donate 50% of our net
          profit to the building of sanitary facilities for those in need.
        </div>
        <div className="font-semibold text-[#FF8400]">
          We make serious impact
        </div>
        <div className="bg-darkcyan green font-volkhov row mx-auto flex h-[70px] max-w-[500px] flex-row justify-between rounded-[17px] p-2 text-gray-100">
          <div className="row flex flex-row">
            <img
              className="h-[50px] w-[50px] rounded-[107px] bg-white p-2"
              alt=""
              src="/impacticon-trees.svg"
            />
            <div className="text-left">
              <p className="">42353</p>
              <p className="font-segoe-ui text-orange=800 h-[33px] w-[130px]">
                trees saved
              </p>
            </div>
          </div>
          <div className="row flex flex-row">
            <img
              className="h-[50px] w-[50px] rounded-[107px] bg-white p-2"
              alt=""
              src="/impacticon-toilets.svg"
            />
            <div className="text-left">
              <p className="">233</p>
              <p className="font-segoe-ui text-orangered inline-block h-[33px] w-[130px] text-left">
                toilets built
              </p>
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
              <b className="font-segoe-ui text-orangered inline-block h-[33px] w-[140px] text-left">
                lives improved
              </b>
            </div>
          </div>
        </div>

        <div className="font-segoe-ui border-dimgray row m-auto my-2 box-border flex h-[50px] max-h-[100px] w-[370px] max-w-[370px] flex-row rounded-[93px] border-[1px] border-solid bg-white">
          <div className="bg-khaki border-dimgray row flex h-full w-[370px] max-w-[370px] flex-row rounded-[98px] border-[1px] border-solid p-1">
            <div className="p-2">
              <span className="font-light">More about</span>
              <b> our mission?</b>
            </div>
            <Button className="bg-[#FFDC63] hover:bg-yellow-400 focus-visible:outline-yellow-500 active:bg-yellow-600">{`Read more >`}</Button>
          </div>
        </div>
        <img className="float-right" alt="" src="/decore1.svg" />
        <img className="" alt="" src="/decore2.svg" />
      </section>
      <section
        className=" row justified-center m-auto flex h-[136px] flex-row"
        id="brands-logos"
      >
        <img className="min-w-[150px]" alt="brand-1" src="/G&W@2x.png" />
        <img className="min-w-[150px]" alt="brand-2" src="/Jumbo@2x.png" />
        <img className="min-w-[150px]" alt="brand-3" src="/eco-brand@2x.png" />
        <img className="min-w-[150px]" src="/farm-fresh@2x.png" />
        <img className="min-w-[150px]" alt="brand-5" src="/sync-ok@2x.png" />
      </section>
      <Footer/>
    </main>
  );
}
