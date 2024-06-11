const Footer = () => {
  return (
    <section className="flex justify-center px-12 flex-wrap">
      <div className="flex gap-24 my-[3.75rem] flex-wrap justify-start lg:max-w-[90%]">
        <div className="max-w-[20%] ">
          <h5 className="text-[0.9rem] font-semibold mb-5">
            About the company
          </h5>
          <p className="text-[0.89rem] text-[#676767]">
            Learn To Love Growth And Change And You Will Be A Success. Microsoft
            Patch{" "}
          </p>
          <div className="flex gap-4 mt-16">
            <img src="./facebook.png" alt="" />
            <img src="./youtube.png" alt="" />
            <img src="./linkedin.png" alt="" />
            <img src="./instagram.png" alt="" />
          </div>
        </div>
        <div>
          <h6 className="font-semibold text-lg text-[#363940] mb-5">
            Products
          </h6>
          <ul>
            <li className="font-medium text-[0.89rem] text-[#676767] ">
              CSR Activities
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Green Banking
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              News
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Ongoing Campgain
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Updates
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg text-[#363940] mb-5">
            Get Started
          </h6>
          <ul>
            <li className="font-medium text-[0.89rem] text-[#676767] ">
              Careers
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Contact Us
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Government Securities
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Examples
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              NIS
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg text-[#363940] mb-5">About</h6>
          <ul>
            <li className="font-medium text-[0.89rem] text-[#676767] ">
              IPDC at a Glance
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Mission, VIsion & Values
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Corporate Governanace
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Shareholders
            </li>
            <li className="font-medium text-[0.89rem] text-[#676767] mt-3">
              Investor Relations
            </li>
          </ul>
        </div>
        <div >
          <img src="./call.png" className="w-[1.5rem] h-[1.5rem]"></img>
          <span className="ml-[0.7rem] text-[1rem] font-semibold">16519</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
