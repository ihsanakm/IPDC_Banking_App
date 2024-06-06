import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="flex">
        <div className="pl-[8.5rem] pt-[8.9rem]">
          <h1 className="font-black text-[4rem] w-[28rem] leading-none mb-[1.44rem]">
            Chase Your Dream with us
          </h1>
          <p className="font-medium text-base w-[24rem] mb-[2.4rem]">
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </p>
          <div className="flex gap-[1.25rem]">
            <Button text="APPLY ONLINE" customStyle="" />
            <button className="text-primary text-xs font-semibold rounded border border-primary py-[0.5rem] px-[1.25rem]">
              LOAN CALCULATOR
            </button>
          </div>
          <div className="flex mt-[11.6rem]">
            <div className="pr-[1rem] border-r border-[#CCCCCC] flex w-fit">
              <img src="./call.png" alt="Call"></img>
              <span className="ml-[0.7rem] text-base font-semibold">16519</span>
            </div>
            <div className="flex gap-[1rem] ml-[1rem]">
              <img
                className="h-[1.5rem] w-[1.5rem]"
                src="./facebook.png"
                alt="Facebook"
              />
              <img
                className="h-[1.5rem] w-[1.5rem]"
                src="./instagram.png"
                alt="Instagram"
              />
              <img
                className="h-[1.5rem] w-[1.5rem]"
                src="linkedin.png"
                alt="LinkedIn"
              />
              <img
                className="h-[1.5rem] w-[1.5rem]"
                src="youtube.png"
                alt="YouTube"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#FFEAF5] ml-[7.5625rem] w-[44.375rem] h-[42.625rem] mt-[-2.3125rem] -z-10">
          <img
            className="absolute top-[9.8125rem] left-[33.375rem]"
            src="./heroImage.png"
            alt="Hero"
          ></img>
          <div className="absolute top-[9rem] right-[36.75rem]">
            <img src="./Fragment1.png" alt="Fragment 1"></img>
          </div>
          <div className="absolute top-[16rem] right-[3.75rem]">
            <img src="./Fragment2.png" alt="Fragment 2"></img>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-[6.25rem] flex flex-col items-center">
          <h2 className="font-bold text-4xl text-center">
            Creating Extraordinary Customer Experience
          </h2>
          <p className="font-medium text-base text-[#999999] max-w-[41.25rem] text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi dignissim eu pharetra consequat montes,
            sagittis.
          </p>
        </div>
        <div className="flex justify-center mt-[4.75rem] pb-[4.6875rem]">
          <div className="grid grid-cols-4 gap-[4rem]">
            <div className="py-6 pl-6">
              <img src="./CircleLayer.png" alt="Circle Layer"></img>
              <div className="mt-[0.625rem] pr-10">
                <h3 className="font-bold text-[1.375rem]">Integrity</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Scenery.png" alt="Scenery"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Demonstrate</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Demonstrating a strong Will to Win in the market place
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./ObjectUngroup.png" alt="Object Ungroup"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Diversity</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Promoting Diversity in the work place and community
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./UserArrows.png" alt="User Arrows"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Teamwork</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  semper aenean id pen
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Cube.png" alt="Cube"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Digital</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./CircleLayer.png" alt="Circle Layer"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Collaboration</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Rocket.png" alt="Rocket"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Technology</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Harnessing the power of Technology to deliver better customer
                  experience
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Bag.png" alt="Bag"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Corporate</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#FCE0EF]">
        <h4 className="font-medium text-2xl text-[#343434] pt-[4.875rem]">
          BUSINESS PARTNERS
        </h4>
        <div className="flex justify-center gap-[9rem] mt-[5.1875rem] pb-[9.375rem]">
          <img src="./Frame12.png" alt="Partner 1" />
          <img src="./Frame13.png" alt="Partner 2" />
          <img src="./Frame14.png" alt="Partner 3" />
          <img src="./Frame15.png" alt="Partner 4" />
        </div>
      </section>
      <section className="flex">
        <div>
          <img src="./Picture.png" alt="Description" className="object-cover" />
        </div>
        <div className="pl-[6.875rem] pt-[8.75rem]">
          <div className="max-w-[28.75rem]">
            <h3 className="text-[2rem] font-bold text-[#343434]">
              IPDC AT A GLANCE
            </h3>
            <p className="text-[1rem] font-medium text-[#676767] mt-[0.1875rem]">
              IPDC Finance Limited (previously known as "Industrial Promotion
              and Development Company of Bangladesh Limited") is the first
              private sector financial institution of the country established in
              1981 by a distinguished group of shareholders namely International
              Finance Corporation (IFC), USA, German Investment and Development
              Company (DEG), Germany, The Aga Khan Fund for Economic Development
              (AKFED), Switzerland, Commonwealth Development Corporation (CDC),
              UK and the Government of Bangladesh
            </p>
            <a
              href="#"
              className="text-[1.25rem] font-medium text-primary inline-flex mt-[0.6875rem]"
            >
              Read More <img src="./rightArrow.svg" alt="" width={29} />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#FEF9FC]">
        <h4 className="mt-[6.625rem] font-bold text-4xl">Our Services</h4>
        <p className="mt-5 text-base font-medium text-[#999999]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
        <div className="flex gap-[3.125rem] justify-center mt-16 mb-[8.125rem]">
          <div>
            <img src="./Image.png" alt="" />
            <a
              href="#"
              className="text-xl font-semibold text-[#363940] flex justify-between mt-5"
            >
              IPDC SAVING SCHEMES{" "}
              <img src="./ArrowCircleRight.svg" alt="" width={29} />
            </a>
          </div>
          <div>
            <img src="./Image(1).png" alt="" />
            <a
              href="#"
              className="text-xl font-semibold text-[#363940] flex justify-between mt-5"
            >
              IPDC Personal loan{" "}
              <img src="./ArrowCircleRight.svg" alt="" width={29} />
            </a>
          </div>
          <div>
            <img src="./Image(2).png" alt="" />
            <a
              href="#"
              className="text-xl font-semibold text-[#363940] flex justify-between mt-5"
            >
              IPDC Deposit schemes{" "}
              <img src="./ArrowCircleRight.svg" alt="" width={29} />
            </a>
          </div>
          <div>
            <img src="./Image(3).png" alt="" />
            <a
              href="#"
              className="text-xl font-semibold text-[#363940] flex justify-between mt-5"
            >
              IPDC auto loan{" "}
              <img src="./ArrowCircleRight.svg" alt="" width={29} />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h5 className="text-4xl font-bold mt-28">
          Our best results for the year
        </h5>
        <p className="font-medium text-base text-[#999999] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
        <div className="grid grid-cols-4 gap-x-40 gap-y-12 mt-20 mb-28">
          <div className="w-[8.75rem]">
            <p className="font-bold text-[2.5rem] text-primary">
              57.6 <span className="text-[1.875rem]">bn</span>{" "}
            </p>
            <p className="text-[1rem] font-medium text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold text-[2.5rem]">0.95%</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              CLASSIFIED LOAN PORTFOLIO
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold text-[2.5rem]">388.5%</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              CLASSIFIED LOAN Coverage
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold text-[2.5rem]">
              50.4 <span className="text-[1.875rem]">bn</span>{" "}
            </p>
            <p className="text-[1rem] font-medium text-[#676767]">Deposit</p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold text-[2.5rem]">AAA</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              Credit Rating
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold text-[2.5rem]">
              6.1 <span className="text-[1.875rem]">bn</span>{" "}
            </p>
            <p className="text-[1rem] font-medium text-[#676767]">
              Shareholders equity
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold text-[2.5rem]">18.51%</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              Capital Adequacy Ratio
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold text-[2.5rem]">
              8.5 <span className="text-[1.875rem]">bn</span>{" "}
            </p>
            <p className="text-[1rem] font-medium text-[#676767]">
              Market Capitalization
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#FEF9FC]">
        <h5 className="text-[2.25rem] font-bold mt-[6.25rem] ">Newsletter</h5>
        <p className="text-[1rem] text-[#999999] max-w-[25.625rem] text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
          aliquam arcu lacus.
        </p>
        <div className="flex items-center gap-3 mt-[2.125rem] mb-[7.25rem]">
          <input
            type="email"
            name="email"
            className="mt-1 py-[0.5rem] px-[1.25rem] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-[21.4375rem] rounded-md sm:text-sm focus:ring-1"
            placeholder="You email"
          />
          <Button text="Subscribe" customStyle="uppercase h-[2.4375rem] mt-1" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
