import { Form, Button as BsButton } from 'react-bootstrap';
import { Button } from '../ui/button';

export default async function Page() {
  return (
    <main>
        <section className='hero'>
            <div className="text-mid font-google-sans text-white ">
              <h2 className="text-14xl font-poppins ml-12 my-2 font-semibold">
                <p className="ml-12 mb-12 text-3xl">Let’s make impact together!</p>
              </h2>
            </div>
            <div className="row flex flex-row justify-between px-12">
                <img className="w-4/12 object-cover" alt="" src="/toilet-construction@2x.png"/>
                <img className="w-4/12 object-cover" alt="" src="/why-bamboo@2x.png" />
            </div>
        </section>

      <div className="text-3xl font-poppins relative h-[5441px] w-full text-left text-black">
        <div className="overflow-y-auto mix-blend-normal">
          <div className="">
            <section className="text-31xl font-lucida-sans-typewriter text-center text-white">
              <div className="bg-yellow-200 w-4/12 rounded-[27px]" id="card-1">
                <div className="" id="card-1">
                  <img className="" alt="" src="/path-7.svg" />
                </div>
                <b className="inline-block [text-shadow:0px_3px_6px_rgba(0,_0,_0,_0.16)] my-4">
                  Request our brochure!
                </b>
                <Button className="bg-[#F9A75D] rounded-[107px] m-6">
                  Request Brochure
                </Button>
              </div>
              <div className="text-18xl h-full w-[431px]" id="card-2">
                <div className="h-full w-[calc(100%_-_1px)]" id="card-2">
                  <img
                    className="h-[155px] w-[431px]"
                    alt=""
                    src="/path-8.svg"
                  />
                </div>
                <b className="inline-block h-[145px] w-[432px]">
                  Create positive impact with your organisation!
                </b>
                <Button
                  className="w-[calc(100%_-_94px)]"
                  disableElevation={true}
                  color="warning"
                  size="medium"
                  variant="contained"
                  sx={{
                    borderRadius: '0px 0px 0px 0px',
                    width: 337,
                    height: 51,
                  }}
                >
                  Create B2B Account
                </Button>
              </div>
              <div className="h-full w-[430px]" id="card-3">
                <div className="h-full w-full" id="card-3">
                  <img
                    className="h-[163.7px] w-[430px]"
                    alt=""
                    src="/path-9.svg"
                  />
                </div>
                <Button
                  className="w-[calc(100%_-_93px)] cursor-pointer"
                  // disableElevation={true}
                  color="warning"
                  size="medium"
                  variant="contained"
                  sx={{
                    borderRadius: '0px 0px 0px 0px',
                    width: 337,
                    height: 51,
                  }}
                  // onClick={onRequestBrochureBtn2Click}
                >
                  Signin
                </Button>
                <b className="inline-block h-[132px] w-[395px]">
                  Already a partner?
                </b>
              </div>
            </section>
            <div className="h-[703px] w-[calc(100%_-_53px)]">
              <p className="m-0 inline-block h-[calc(100%_-_81px)] w-[calc(100%_-_5px)] font-semibold">
                <span className="block">
                  <span>
                    Thanks to our partners, we can save even more trees, help
                    even more people, and build even more toilets. We are proud
                    to donate 50% of our net profit to maximize our impact.
                  </span>
                </span>
                <span className="block">
                  <span>
                    Show who you are as a business and impress your customers,
                    business associates or staff. As a business customer, it is
                    possible to purchase sustainable toilet rolls with
                    personalized wrappers. In addition, our customers can see
                    how much impact they have made via a personal impact meter.
                    It calculates the number of saved trees, built toilets and
                    improved lives!
                  </span>
                </span>
                <span className="block">
                  <span>{`Hungry for more information about our projects? Take a look at our `}</span>
                  <span className="text-palevioletred">
                    <span className="[text-decoration:underline]">
                      impact report
                    </span>
                    .
                  </span>
                </span>
              </p>
              <h3 className="text-31xl font-inherit font-semibold">
                Our impact
              </h3>
            </div>
            <div className="top-[calc(50%_+_983.25px)] h-[478px] w-[calc(100%_-_53px)]">
              <p className="m-0 inline-block h-[calc(100%_-_81px)] w-[calc(100%_-_5px)] font-semibold">
                <span className="block">
                  We support our partners with signs to complete social media
                  expressions and posters. Our goal is to help you promote your
                  business in the most sustainable and social way possible!
                </span>
                <span className="block">
                  We are happy with your contribution, you have a strong story
                  for your partners and customers, and do something good for a
                  better world. But above all we make an impact together!
                </span>
              </p>
              <h3 className="text-31xl font-inherit m-0 font-semibold">
                Marketing support
              </h3>
            </div>
            <div className="h-[859px] w-[calc(100%_-_53px)]">
              <p className="absolute left-[6px] top-[81px] m-0 inline-block h-[calc(100%_-_245px)] w-[calc(100%_-_5px)] font-semibold">
                <span className="block">
                  At The Green Roll Africa, we're excited to make a difference
                  with you. Become a partner now and help us in our mission to
                  change the world, one roll at the time!
                </span>
                <span className="block">
                  Whether you have a small yoga studio or a large multinational,
                  a store or a webshop, making the transition to The Green Roll
                  Africa is easy. We make custom rolls and wrappers for the
                  largest companies, but we also deliver to the greengrocer
                  around the corner with just as much love: because only
                  together can we make an impact!
                </span>
                <span className="block">
                  Request the brochure and join The Green Roll Africa!
                </span>
                <span className="block">&nbsp;</span>
                <span className="block">Wipe right, change lives</span>
              </p>
              <h3 className="text-31xl font-inherit absolute left-[0px] top-[0px] m-0 font-semibold">
                Let's rock and roll!
              </h3>
              <div className="text-palevioletred absolute bottom-[0px] left-[6px] h-[164px] w-[552px]">
                <a className="absolute bottom-[56px] left-[0px] font-semibold text-[inherit] [text-decoration:none]">
                  <p className="m-0">info@thegreenrollafrica.com</p>
                </a>
                <a className="absolute bottom-[0px] left-[0px] font-semibold text-[inherit] [text-decoration:none]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">+233 24 444 4444</p>
                </a>
              </div>
            </div>
            <div className="absolute left-[53px] right-[0px] top-[calc(50%_+_11.25px)] h-[264px] w-[calc(100%_-_53px)]">
              <p className="absolute left-[6px] top-[81px] m-0 inline-block h-[calc(100%_-_81px)] w-[calc(100%_-_5px)] whitespace-pre-wrap font-semibold">
                We are not just a toilet paper company. The Green Roll Africa
                produces 100% environmentally-friendly and sustainable toilet
                paper from bamboo.
              </p>
              <h3 className="text-31xl font-inherit absolute left-[0px] top-[0px] m-0 font-semibold">
                Our products
              </h3>
            </div>
            <div className="text-31xl absolute left-[53px] right-[0px] top-[calc(50%_-_1254.75px)] h-[1194px] w-[calc(100%_-_53px)]">
              <h3 className="font-inherit absolute left-[0px] top-[0px] m-0 font-semibold text-inherit">
                The Green Roll Africa, who?
              </h3>
              <div className="text-18xl h-[calc(100%_-_101px)] w-[calc(100%_-_6px)]">
                <video
                  className="absolute left-[112px] top-[calc(50%_-_174.5px)] h-[721px] w-[957px]"
                  controls
                >
                  <source src="https://www.youtube.com/watch?v=9m964UpqJQM" />
                </video>
                <p className="m-0 inline-block h-[383px] w-[calc(100%_+_1px)] font-semibold">
                  Sustainable entrepreneurship is increasingly becoming the
                  norm. An easy step to start with is responsible sourcing. By
                  using Green Roll toilet paper, you can make a major impact,
                  both socially and ecologically. Our products are 100%
                  sustainably sourced and half of our net profit goes to the
                  construction of toilets in developing countries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gainsboro font-roboto absolute bottom-[-4px] h-[808px] w-[calc(100%_-_40px)] text-3xl">
          <img
            className="h-[407px] w-[calc(100%_-_143px)] max-w-full overflow-hidden"
            alt=""
            src="/subscribe-bg.svg"
          />
        </div>
      </div>
    </main>
  );
}
