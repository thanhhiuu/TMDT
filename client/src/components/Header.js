/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import icons from '../ultils/icons';

const Header = () => {
  const { CiHeart, CiMail, FaPhoneAlt, FaOpencart } = icons;
  return (
    <div className="flex justify-between items-center text-main">
      <img src="https://digital-world-2.myshopify.com/cdn/shop/files/logo_digital_new_250x.png?v=1613166683" />
      <div className="flex justify-center items-center ">
        <span className="px-[20px] flex flex-col items-center border-r">
          <div className="flex gap-1 justify-center items-center ">
            <p className="font-bold text-[13px]">
              <FaPhoneAlt
                color="#B87331"
                className="cursor-pointer"
                fontSize={'15px'}
              />
            </p>
            <p className="font-bold text-[13px]">(+1800) 000 8808</p>
          </div>
          <p className="text-[12px]">Mon-Sat 9:00AM - 8:00PM</p>
        </span>
        <span className="px-[20px] flex flex-col items-center border-r">
          <div className="flex gap-1  justify-center items-center">
            <p className="font-bold text-[13px] ">
              <CiMail
                color="#B87331"
                className="cursor-pointer"
                fontSize={'15px'}
              />
            </p>
            <p className="font-bold text-[13px]">support@tadathemes.com</p>
          </div>
          <p className="text-[12px]">Online Support 24/7</p>
        </span>

        <span className="px-[20px] border-r text-[12px]">
          <CiHeart
            color="#B87331"
            fontSize={'20px'}
            className="cursor-pointer"
          />
        </span>
        <span className="px-[20px] text-[12px]">
          <FaOpencart
            color="#B87331"
            className="cursor-pointer"
            fontSize={'20px'}
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
