import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="flex">
        <div className="pl-[135px] pt-[142px]">
          <h1 className="font-black text-[63px] w-[450px] leading-none mb-[23px]">
            Chase Your Dream with us
          </h1>
          <p className="font-medium text-base w-96 mb-[38px]">
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </p>
          <div className="flex gap-5">
            <Button text="APPLY ONLINE" customStyle="" />
            <button className="text-primary text-xs font-semibold rounded border border-primary py-[8px] px-[20px]">
              LOAN CALCULATOR
            </button>
          </div>
          <div className="flex mt-[185px]">
            <div className="pr-4 border-r border-[#CCCCCC] flex w-fit">
              <img src="./call.png"></img>
              <span className="ml-[11px] text-[17px] font-semibold">16519</span>
            </div>
            <div className="flex gap-4 ml-4">
              <img className=" h-6 w-6" src="./facebook.png" alt="" />
              <img className=" h-6 w-6" src="./instagram.png" alt="" />
              <img className=" h-6 w-6" src="linkedin.png" alt="" />
              <img className=" h-6 w-6" src="youtube.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#FFEAF5] ml-[121px] w-[710px] h-[682px] mt-[-37px] -z-10">
          <img
            className="absolute top-[157px] left-[534px]"
            src="./heroImage.png"
          ></img>
          <div className="absolute top-[144px] right-[588px]">
            <img src="./Fragment1.png"></img>
          </div>
          <div className="absolute top-[256px] right-[60px]">
            <img src="./Fragment2.png"></img>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-[100px] flex flex-col items-center">
          <h2 className="font-bold text-4xl text-center">
            Creating Extraordinary Customer Experience
          </h2>
          <p className="font-medium text-base text-[#999999] max-w-[660px] text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi dignissim eu pharetra consequat montes,
            sagittis.
          </p>
        </div>
        <div className="flex justify-center mt-[76px] pb-[75px]">
          <div className="grid grid-cols-4 gap-16">
            <div className="py-6 pl-6">
              <img src="./CircleLayer.png"></img>
              <div className="mt-[10px] pr-10">
                <h3 className="font-bold text-[22px]">Integrity</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Scenery.png"></img>
              <div className="mt-[10px]">
                <h3 className="font-bold text-[22px]">Demonstrate</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Demonstrating a strong Will to Win in the market place
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./ObjectUngroup.png"></img>
              <div className="mt-[10px]">
                <h3 className="font-bold text-[22px]">Diversity</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Promoting Diversity in the work place and community{" "}
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./UserArrows.png"></img>
              <div className="mt-[10px]">
                <h3 className="font-bold text-[22px]">Teamwork</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  semper aenean id pen{" "}
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Cube.png"></img>
              <div className="mt-[10px]">
                <h3 className="font-bold text-[22px]">Digital</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./CircleLayer.png"></img>
              <div className="mt-[10px]">
                <h3 className="font-bold text-[22px]">Collaboration</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Displaying the highest level of Integrity in the way we
                  conduct our business
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Rocket.png"></img>
              <div className="mt-[10px]">
                <h3 className="font-bold text-[22px]">Technology</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Harnessing the power of Technology to deliver better customer
                  experience{" "}
                </p>
              </div>
            </div>
            <div className="py-6 pl-6">
              <img src="./Bag.png"></img>
              <div className="mt-[10px]">
                <h3 className="font-bold text-[22px]">Corporate</h3>
                <p className="font-medium text-sm  text-[#999999] max-w-40">
                  Setting the standard for the best Corporate Citizenship in the
                  communities we work{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col text-center pt-[78px] bg-[#FCE0EF]">
          <h4 className="font-medium text-2xl text-[#343434] ">
            BUSINESS PARTNERS
          </h4>
          <div className="flex justify-center gap-36 mt-[83px] pb-[150px]">
            <img src="./Frame12.png" alt="" />
            <img src="./Frame13.png" alt="" />
            <img src="./Frame14.png" alt="" />
            <img src="./Frame15.png" alt="" />
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="">
          <img src="./Picture.png" alt="Description" className="object-cover" />
        </div>
        <div className="pl-[110px] pt-[140px] ">
          <div className="max-w-[460px]">
            <h3 className="text-[32px] font-bold text-[#343434]">
              IPDC AT A GLANCE
            </h3>
            <p className="text-[16px] font-medium text-[#676767] mt-3">
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
              className="text-xl font-medium text-primary inline-flex mt-11"
            >
              Read More <img src="./rightArrow.svg" alt="" width={29} />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#FEF9FC]">
        <h4 className="mt-[106px] font-bold text-4xl">Our Services</h4>
        <p className="mt-5 text-base font-medium text-[#999999]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
        <div className="flex gap-[50px] justify-center mt-16 mb-[130px]">
          <div>
            <img src="./Image.png"></img>
            <a
              href="#"
              className="text-xl font-semibold text-[#363940] flex justify-between mt-5"
            >
              IPDC SAVING SCHEMES{" "}
              <img src="./ArrowCircleRight.svg" alt="" width={29} />
            </a>
          </div>
          <div>
            <img src="./Image(1).png"></img>
            <a
              href="#"
              className="text-xl font-semibold text-[#363940] flex justify-between mt-5"
            >
              IPDC Personal loan{" "}
              <img src="./ArrowCircleRight.svg" alt="" width={29} />
            </a>
          </div>
          <div>
            <img src="./Image(2).png"></img>
            <a
              href="#"
              className="text-xl font-semibold text-[#363940] flex justify-between mt-5"
            >
              IPDC Deposit schemes{" "}
              <img src="./ArrowCircleRight.svg" alt="" width={29} />
            </a>
          </div>
          <div>
            <img src="./Image(3).png"></img>
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
          <div className="w-[140px]">
            <p className="font-bold text-[40px] text-primary">
              57.6 <span className="text-3xl">bn</span>{" "}
            </p>
            <p className="text-[16x] font-medium text-[#676767]">
              LOAN PORTFOLIO
            </p>
          </div>
          <div className="w-[140px]">
            {" "}
            <p className="font-bold text-[40px]">0.95%</p>
            <p className="text-[16x] font-medium text-[#676767]">
              CLASSIFIED LOAN PORTFOLIO
            </p>
          </div>
          <div className="w-[140px]">
            {" "}
            <p className="font-bold text-[40px] ">388.5%</p>
            <p className="text-[16x] font-medium text-[#676767]">
              CLASSIFIED LOAN Coverage
            </p>
          </div>
          <div className="w-[140px]">
            {" "}
            <p className="font-bold text-[40px]">
              50.4 <span className="text-3xl">bn</span>{" "}
            </p>
            <p className="text-[16x] font-medium text-[#676767]">Deposit</p>
          </div>
          <div className="w-[140px]">
            {" "}
            <p className="font-bold text-[40px] ">AAA</p>
            <p className="text-[16x] font-medium text-[#676767]">
              Credit Rating
            </p>
          </div>
          <div className="w-[140px]">
            {" "}
            <p className="font-bold text-[40px] ">
              6.1 <span className="text-3xl">bn</span>{" "}
            </p>
            <p className="text-[16x] font-medium text-[#676767]">
              Shareholders equity
            </p>
          </div>
          <div className="w-[140px]">
            {" "}
            <p className="font-bold text-[40px] ">18.51%</p>
            <p className="text-[16x] font-medium text-[#676767]">
              Capital Adequacy Ratio
            </p>
          </div>
          <div className="w-[140px]">
            {" "}
            <p className="font-bold text-[40px] ">
              8.5 <span className="text-3xl">bn</span>{" "}
            </p>
            <p className="text-[16x] font-medium text-[#676767]">
              Market Capitalization
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-[#FEF9FC]">
        <h5 className="text-[36px] font-bold mt-[100px] ">Newsletter</h5>
        <p className="text-[16px] text-[#999999] max-w-[410px] text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
          aliquam arcu lacus.
        </p>
        <div className="flex items-center gap-3 mt-[34px] mb-[116px]">
          <input
            type="email"
            name="email"
            className="mt-1 py-[8px] px-[20px] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-[343px] rounded-md sm:text-sm focus:ring-1"
            placeholder="You email"
          />
          <Button text="Subscribe" customStyle="uppercase h-[39px]  mt-1" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
