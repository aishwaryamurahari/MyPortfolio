import React from 'react';
import portfolios from '../data/portfolioData';

const Modal = ({ activeID, setShowModal }) => {
  const style = {
    whiteSpace: 'pre-line',
  };
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-black bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          {/* <figure>
                        <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                    </figure> */}
        </div>
        <div>
          <h2 className="text-2xl text-accent font-[700] my-5">
            {portfolio.title}
          </h2>

          <p
            style={style}
            className="text-[15px] leading-7 text-smallTextColor"
          >
            {portfolio.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700] font-bold">
              Technologies
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portfolio.siteUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-300 text-black py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-orange-300 ease-in duration-300">
              Project Link
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-orange-300 absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
