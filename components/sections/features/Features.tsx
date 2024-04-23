import { Ev, Power, Solar, Wind } from "@/components/elements";

export const Features = () => {
  return (
    <section className="py-48 bg-[#FFF7ED] rounded-3xl">
      <div className="container">
        <div className="flex items-center gap-2 border-b border-neutral-500 pb-4 sm:mb-14 mb-12">
          <span className="h-2 w-2 bg-primary-300 rounded-full block" />
          <span>Solutions</span>
        </div>

        <div>
          <div className="sm:mb-24 mb-12">
            <h2 className="text-section leading-none">Key to clean future</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 xl:grid-cols-4">
            <div className="flex flex-col gap-6 items-start">
              <Ev />
              <div>
                <h3 className="text-sub-title leading-none mb-4 font-semibold">
                  EV charging
                </h3>
                <p className="text-neutral-800">
                  EVs use electricity as a power source, which can be generated
                  from renewable energy sources. Our solutions help reducing
                  greenhouse gas emissions in the transportation sector.
                </p>
              </div>
              <button className="text-primary-950 text-2xl font-bold border border-primary-400 py-2 px-4 rounded-3xl hover:bg-primary-300 duration-300">
                Read more
              </button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Solar />
              <div>
                <h3 className="text-sub-title leading-none mb-4 font-semibold">
                  Solar Energy
                </h3>
                <p className="text-neutral-800">
                  Solar panels convert sunlight into electricity. Photovoltaic
                  (PV) cells on these panels capture the energy from the sun and
                  convert it into electrical power.
                </p>
              </div>
              <button className="text-primary-950 text-2xl font-bold border border-primary-400 py-2 px-4 rounded-3xl hover:bg-primary-300 duration-300">
                Read more
              </button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Wind />
              <div>
                <h3 className="text-sub-title leading-none mb-4 font-semibold">
                  Wind Energy
                </h3>
                <p className="text-neutral-800">
                  Wind turbines harness the kinetic energy of the wind to
                  generate electricity. Wind farms with multiple turbines are
                  commonly used to produce large amounts of clean energy.
                </p>
              </div>
              <button className="text-primary-950 text-2xl font-bold border border-primary-400 py-2 px-4 rounded-3xl hover:bg-primary-300 duration-300">
                Read more
              </button>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <Power />
              <div>
                <h3 className="text-sub-title leading-none mb-4 font-semibold">
                  Hydropower
                </h3>
                <p className="text-neutral-800">
                  This technology uses the energy from flowing water, such as
                  rivers and dams, to turn turbines and generate electricity.
                  It&apos;s one of the oldest forms of renewable energy.
                </p>
              </div>
              <button className="text-primary-950 text-2xl font-bold border border-primary-400 py-2 px-4 rounded-3xl hover:bg-primary-300 duration-300">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
