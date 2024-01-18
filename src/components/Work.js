import React, { useState, useEffect } from 'react';
import data from '../data/portfolioData';
import Modal from '../components/Modal';

const Work = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === 'all') {
      setPortfolios(data);
    }

    if (selectTab === 'web-design') {
      const filteredData = data.filter(
        (item) => item.category === 'Web Design'
      );
      setPortfolios(filteredData);
    }
    if (selectTab === 'backend') {
      const filteredData = data.filter((item) => item.category === 'Backend');
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section className="items-center mb-80" id="work">
      <div className="container mx-auto flex flex-col items-center mb-100">
        <div className="flex items-center justify-between flex-wrap gap-x-32 gap-y-2 mt-20 mb-50">
          <div className="ml-auto">
            <div className="mb-7 sm:mb-0">
              <h3 className="sm:text-[40px] text-headingColor text-[32px] font-extrabold text-accent">
                MY PROJECTS
              </h3>
            </div>
          </div>

          <div className="mr-auto">
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectTab('all')}
                className="btn btn-sm text-[18px]"
              >
                All
              </button>

              <button
                onClick={() => setSelectTab('web-design')}
                className="btn btn-sm text-[18px]"
              >
                Web Design
              </button>

              <button
                onClick={() => setSelectTab('backend')}
                className="btn btn-sm text-[18px]"
              >
                Backend
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12 mb-50">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-96 max-h-60 sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-[8px] max-w-96 max-h-60 border border-white"
                  src={portfolio.imgUrl}
                  alt=""
                />
              </figure>

              <div
                className="h-60 w-px bg-black bg-opacity-20 absolute top-0 left-0 z-[5] hidden
                    group-hover:block rounded-[8px]"
              >
                <div className="w-96 h-60 flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-black hover:bg-orange py-2 px-4 rounded-[8px]
                        font-[500] ease-in duration-200 border-black border-solid"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-black hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                            font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Work;
