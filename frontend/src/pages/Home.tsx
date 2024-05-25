import Button from "../Components/Button";
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
        <div className="flex w-full h-full">
          <img
            src="./Picture.png"
            alt="Description"
            className="w-full h-auto"
          />
        </div>
        <div>
          <h3>IPDC AT A GLANCE</h3>
          <p>
            IPDC Finance Limited (previously known as "Industrial Promotion and
            Development Company of Bangladesh Limited") is the first private
            sector financial institution of the country established in 1981 by a
            distinguished group of shareholders namely International Finance
            Corporation (IFC), USA, German Investment and Development Company
            (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED),
            Switzerland, Commonwealth Development Corporation (CDC), UK and the
            Government of Bangladesh
          </p>
          <a href="#">Hello</a>
        </div>
      </section>
    </>
  );
};

export default Home;
