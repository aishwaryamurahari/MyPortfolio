import React from 'react';
const Header = () => {
  return (
    <header className="w-full h-[75px] leading-[80px] flex items-center bg-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-[10px]">
            <a href="#Banner">
              <span className="w-[35px] h-[35px] bg-black text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                A
              </span>
            </a>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-semibold">
                AISHWARYA MURAHARI
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
