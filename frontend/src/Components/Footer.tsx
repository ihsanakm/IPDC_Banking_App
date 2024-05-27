import React from "react";

const Footer = () => {
  return (
    <section className="flex">
      <div className="flex gap-24 my-[60px] ml-[135px]">
        <div className="max-w-[180px] ">
          <h5 className="text-[18px] font-semibold mb-5">About the company</h5>
          <p className="text-[14px] text-[#676767]">
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
            <li className="font-medium text-[14px] text-[#676767] ">
              CSR Activities
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Green Banking
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              News
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Ongoing Campgain
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Updates
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg text-[#363940] mb-5">
            Get Started
          </h6>
          <ul>
            <li className="font-medium text-[14px] text-[#676767] ">Careers</li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Contact Us
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Government Securities
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Examples
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">NIS</li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg text-[#363940] mb-5">About</h6>
          <ul>
            <li className="font-medium text-[14px] text-[#676767] ">
              IPDC at a Glance
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Mission, VIsion & Values
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Corporate Governanace
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Shareholders
            </li>
            <li className="font-medium text-[14px] text-[#676767] mt-3">
              Investor Relations
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mt-[64px] ml-[194px]">
        <img src="./call.png" className="w-[24px] h-[24px]"></img>
        <span className="ml-[11px] text-[17px] font-semibold">16519</span>
      </div>
    </section>
  );
};

export default Footer;
