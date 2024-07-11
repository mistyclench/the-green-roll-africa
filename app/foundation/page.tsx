import Footer from '../ui/footer';
import Image from 'next/image';

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col mx-[40px]">
      <div className="font-poppins relative text-3xl text-black">
        <div className="">
          <section className="py-4 text-3xl">
            <h3 className="font-inherit font-semibold text-inherit">
              The Green Roll Foundation
            </h3>
            <div className="py-2 text-2xl">
              <p className="inline-block font-semibold">
                <span className="block">
                  The Green Roll Foundation, the corporate social responsibility
                  arm of The Green Roll, was established in 2018. Each year, The
                  Green Roll donates 50% of its net profit to the construction
                  of safe and clean toilets in developing countries. The
                  projects we engage in, besides building the sanitary
                  facilities, are related to education on sanitary products,
                  such as toilet rolls, menstruation pads, and soap.
                </span>
                <span className="block">
                  The Green Roll Foundation has one goal: to make sustainable
                  sanitation available. Our Foundation was established to spend
                  the money we raise through the sale of our rolls on the
                  construction of sanitation, without making a profit in the
                  process. We believe in our entrepreneurship. We reserve a
                  maximum amount for the donation to our foundation and for our
                  cooperation with SIMAVI. All for the construction of toilets.
                  Therefore we have fixed our &quot;overhead costs&quot; to a
                  maximum of 30%. If the costs exceed 20%, the extra costs will
                  be deducted from our profit share and will not be charged to
                  our Foundation.
                </span>
                <span className="block">
                  Our main priority is to improve children&apos;s lives and
                  therefore we mainly focus on schools and their communities
                  within Ghana. The foundation contributes mainly to the United
                  Nations Sustainable Development Goal number six: “Clean water
                  and Sanitation for all by 2030”. In this way we remain fully
                  focused on our mission: building toilets and improving
                  people&apos;s lives in countries where they lack these basic
                  facilities.
                </span>
              </p>
            </div>
          </section>
          <section className="py-4">
            <h3 className="font-inherit m-0 text-3xl font-semibold">
              We give a shit!
            </h3>
            <p className="m-0 inline-block py-2 text-2xl font-semibold">
              <span className="block">
                <span>
                  Every financial year, we publish our annual financial
                  statements. The donation goes to our Foundation, which
                  distributes it over our own projects and for example
                  collaborations with SIMAVI. Our impact meter shows how many
                  toilets we have built and will build. This impact meter is
                  therefore partly fictitious. It does, however, give a good
                  picture of our mission, the current projects and what the
                  counter will look like when we draw up our annual figures.
                </span>
              </span>
              <span className="block">
                <span>
                  Because of our positive impact on people and the planet, The
                  Green Roll Foundation recently received ANBI status 8588 94
                  178. This certificate is awarded to non-profit organisations
                  that direct at least 90% of their efforts towards the common
                  good.
                </span>
              </span>
              <span className="block">
                <span>{`Do you want to know more about our impact? `}</span>
                <span className="text-palevioletred [text-decoration:underline]">
                  Read our annual report 2021
                </span>
                <span>.</span>
              </span>
              <span className="block">
                <span>&nbsp;</span>
              </span>
            </p>
          </section>
          <section className="py-4">
            <h3 className="font-inherit m-0 text-3xl font-semibold">
              We build toilets!
            </h3>
            <p className="m-0 inline-block py-2 text-2xl font-semibold">
              Below pictures of a few of our projects are presented. Check out
              our foundation website to read more about our upcoming- and
              finished projects.
            </p>
            <div className="row flex flex-row">
              <div className="">
                <Image
                  className="object-cover p-5"
                  width={611}
                  height={387}
                  alt=""
                  src="/1615984665-blob@2x.png"
                />
                <div className="text-base">
                  <i className="m-0 inline-block font-light">Zongo, Accra</i>
                </div>
              </div>
              <div className="">
                <Image
                  className="object-cover p-5"
                  width={611}
                  height={387}
                  alt=""
                  src="/1615984767-blob@2x.png"
                />
                <div className="text-base">
                  <i className="m-0 inline-block font-light">
                    Bob school, Ghana
                  </i>
                </div>
              </div>
            </div>
          </section>

          <section className="">
            <p className="m-0 inline-block font-semibold">
              <span className="block">
                With the Green Roll we contribute mainly to the UN Sustainable
                Development Goal number 6, clean water and sanitation for
                everyone by 2030. We believe clean drinking water and clean
                sanitation have a positive impact on other Sustainable
                Development Goals, such as food safety, education and health.
                Clean toilets in schools ensure that more girls continue going
                to school, even when they have their period. Besides, children
                become less susceptible to diseases, both of which result in a
                more educated youth which will be better equipped to contribute
                to the economy.
              </span>
              <span className="block">
                Millions of people still die every year from diseases caused by
                poor sanitation and this has a direct impact on the local
                economy. Currently, 1.8 billion people still get their drinking
                water from polluted sources and an additional 2.4 billion people
                still have no access to clean toilets and other sanitary
                facilities.
              </span>
              <span className="block">
                A lot of waste products are still thrown away in bodies of
                water. To improve the quality of water across the globe, this
                form of pollution must stop and waste water must be purified.
                All countries should have a properly functioning water
                management system, if feasible, by 2030. Check out the figure
                below to see what SDG&apos;s The Green Roll contributes to:
              </span>
            </p>
            <h3 className="text-31xl font-inherit m-0 font-semibold">
              Sustainable Development Goals (SDGs)
            </h3>
          </section>
          <Image
            className="mx-auto object-cover"
            width={1000}
            height={587}
            alt=""
            src="/1680593096-1604494419-blob@2x.png"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
