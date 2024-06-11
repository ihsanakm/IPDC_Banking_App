import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="flex lg:flex-row flex-col content-center justify-center">
        <div className="pl-14 pt-14 lg:pt-[8.9rem] lg:max-w-[40%]  ">
          <h1 className="font-black text-5xl xl:text-[4rem]  leading-none mb-[1.44rem] lg:max-w-[90%]">
            Chase Your Dream with us
          </h1>
          <p className="font-medium text-base  lg:mb-[2.4rem] mb-4 lg:max-w-[90%]">
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </p>
          <div className="flex xl:gap-[1.25rem] gap-3">
            <Button text="APPLY ONLINE" customStyle="" />
            <button className="text-primary text-xs font-semibold rounded border border-primary py-[0.5rem] px-[1.25rem]">
              LOAN CALCULATOR
            </button>
          </div>
          <div className="flex lg:mt-[11.6rem] mt-8">
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
        <div className="bg-[#FFEAF5] lg:mt-[-2.3125rem] lg:-z-10  lg:static lg:max-w-[60%] lg:h-full h-[30rem] mt-8 ">
            <img
              className="lg:relative lg:top-[10rem] xl:h-[40rem] h-[30rem] w-[60rem] object-contain"
              src="./heroImage.png"
              alt="Hero"
            ></img>
            <img src="./Fragment1.png" alt="Fragment 1" className="relative xl:bottom-[35rem] xl:w-64 w-56 bottom-96"></img>
            <img src="./Fragment2.png" alt="Fragment 2" className="relative xl:bottom-[35rem] xl:left-[65%] xl:w-64 w-56 lg:left-[60%] left-[70%] bottom-96"></img>
        </div>
      </section>
      <section className="px-14 lg:px-0">
        <div className="lg:pt-[6.25rem] pt-14 flex flex-col items-center">
          <h2 className="font-bold text-3xl lg:text-4xl text-center">
            Creating Extraordinary Customer Experience
          </h2>
          <p className="font-medium text-base text-[#999999]  text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi dignissim eu pharetra consequat montes,
            sagittis.
          </p>
        </div>
        <div className="flex justify-center mt-[4.75rem] pb-[4.6875rem]">
          <div className="grid lg:grid-cols-4 grid-cols-4  gap-5 lg:max-w-[85%]">
            <div className="py-6 lg:pl-6 ">
              <img src="./CircleLayer.png" alt="Circle Layer"></img>
              <div className="mt-[0.625rem] lg:pr-10">
                <h3 className="font-bold text-[1.375rem]">Integrity</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div className="py-6 lg:pl-6">
              <img src="./Scenery.png" alt="Scenery"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Demonstrate</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Demonstrating a strong Will to Win in the market place
                </p>
              </div>
            </div>
            <div className="py-6 lg:pl-6">
              <img src="./ObjectUngroup.png" alt="Object Ungroup"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Diversity</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Promoting Diversity in the work place and community
                </p>
              </div>
            </div>
            <div className="py-6 lg:pl-6">
              <img src="./UserArrows.png" alt="User Arrows"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Teamwork</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  semper aenean id pen
                </p>
              </div>
            </div>
            <div className="py-6 lg:pl-6">
              <img src="./Cube.png" alt="Cube"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Digital</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </p>
              </div>
            </div>
            <div className="py-6 lg:pl-6">
              <img src="./CircleLayer.png" alt="Circle Layer"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Collaboration</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div className="py-6 lg:pl-6">
              <img src="./Rocket.png" alt="Rocket"></img>
              <div className="mt-[0.625rem]">
                <h3 className="font-bold text-[1.375rem]">Technology</h3>
                <p className="font-medium text-sm text-[#999999] max-w-[10rem]">
                  Harnessing the power of Technology to deliver better customer
                  experience
                </p>
              </div>
            </div>
            <div className="py-6 lg:pl-6">
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
      <section className="flex flex-col items-center bg-[#FCE0EF] px-14 lg:px-0">
        <h4 className="font-medium text-2xl text-[#343434] lg:pt-[4.875rem] pt-8 pb-4">
          BUSINESS PARTNERS
        </h4>
        <div className="flex flex-wrap justify-center lg:grid-cols-4 lg:gap-20 lg:mt-[5.1875rem] lg:pb-[9.375rem] pb-8 ">
         <div> <img src="./Frame12.png" alt="Partner 1" /></div>
         <div><img src="./Frame13.png" alt="Partner 2" /></div>
         <div><img src="./Frame14.png" alt="Partner 3" /></div>
         <div><img src="./Frame15.png" alt="Partner 4" /></div>
        </div>
 </section>
      <section className="flex flex-col-reverse lg:flex-row lg:justify-between gap-4 px-14 lg:px-0">
   <div>
          <img src="./Picture.png" alt="Description" className="w-full h-[400px] lg:h-full object-contain
          " />
        </div>
        <div className="xl:pt-[8.75rem] pt-8 px-[2.5%]">
          <div className="lg:max-w-[40rem] xl:pr-8 text-center lg:text-left">
            <h3 className="text-[2rem] font-bold text-[#343434] mb-8">
              IPDC AT A GLANCE
            </h3>
            <p className="xl:text-[1.2rem] font-medium text-[#676767] mt-[0.1875rem] text-justify">
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
              Read More <img src="./rightArrow.svg" alt="" className="m-1 h-5 pl-4" />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#FEF9FC] px-14 lg:px-0">
        <h4 className="mt-[6.625rem] font-bold text-4xl">Our Services</h4>
        <p className="mt-5 text-base font-medium text-[#999999] px-9 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
        <div className="flex lg:gap-[3.125rem] gap-5 justify-center lg:mt-16 mb-[8.125rem] max-w-[90%] flex-wrap items-center">
          <div>
            <img src="./Image.png" alt="" className="h-[65%] lg:h-full" />
            <a
              href="#"
              className="lg:lg:text-xl text-sm font-semibold text-[#363940] flex lg:justify-between mt-5 items-center"
            >
              IPDC Saving Schema{" "}
              <img src="./ArrowCircleRight.svg" alt="" className="m-1 h-5 pl-4"  />
            </a>
          </div>
          <div>
            <img src="./Image(1).png" alt="" className="h-[65%] lg:h-full" />
            <a
              href="#"
              className="lg:text-xl text-sm font-semibold text-[#363940] flex lg:justify-between mt-5 items-center"
            >
              IPDC Personal loan{" "}
              <img src="./ArrowCircleRight.svg" alt="" className="m-1 h-5 pl-4" />
            </a>
          </div>
          <div>
            <img src="./Image(2).png" alt="" className="h-[65%] lg:h-full" />
            <a
              href="#"
              className="lg:text-xl text-sm font-semibold text-[#363940] flex lg:justify-between mt-5 items-center"
            >
              IPDC Deposit schemes{" "}
              <img src="./ArrowCircleRight.svg" alt="" className="m-1 h-5 pl-4" />
            </a>
          </div>
          <div>
            <img src="./Image(3).png" alt="" className="h-[65%] lg:h-full" />
            <a
              href="#"
              className="lg:text-xl text-sm font-semibold text-[#363940] flex lg:justify-between mt-5 items-center"
            >
              IPDC auto loan{" "}
              <img src="./ArrowCircleRight.svg" alt="" className="m-1 h-5 pl-4" />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center px-14 lg:px-0">
   <h5 className="text-4xl font-bold mt-28">
          Our best results for the year
        </h5>
        <p className="font-medium text-base text-[#999999] mt-5 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-3 xl:gap-x-40 lg:gap-x-24 gap-x-16 lg:gap-y-12 gap-y-8 mt-20 lg:mb-28">
          <div className="w-[8.75rem]">
            <p className="font-bold  lg:text-[2.5rem] text-[2rem] text-primary">
              57.6 <span className="text-[1.875rem]">bn</span>{" "}
            </p>
            <p className="text-[1rem] font-medium text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold  lg:text-[2.5rem] text-[2rem]">0.95%</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              CLASSIFIED LOAN PORTFOLIO
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold  lg:text-[2.5rem] text-[2rem]">388.5%</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              CLASSIFIED LOAN Coverage
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold  lg:text-[2.5rem] text-[2rem]">
              50.4 <span className="text-[1.875rem]">bn</span>{" "}
            </p>
            <p className="text-[1rem] font-medium text-[#676767]">Deposit</p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold  lg:text-[2.5rem] text-[2rem]">AAA</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              Credit Rating
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold  lg:text-[2.5rem] text-[2rem]">
              6.1 <span className="text-[1.875rem]">bn</span>{" "}
            </p>
            <p className="text-[1rem] font-medium text-[#676767]">
              Shareholders equity
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold  lg:text-[2.5rem] text-[2rem]">18.51%</p>
            <p className="text-[1rem] font-medium text-[#676767]">
              Capital Adequacy Ratio
            </p>
          </div>
          <div className="w-[8.75rem]">
            {" "}
            <p className="font-bold  lg:text-[2.5rem] text-[2rem]">
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
