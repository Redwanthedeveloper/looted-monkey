import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImage1 from '../images/slider/1.png';
import sliderImage2 from '../images/slider/2.png';
import sliderImage3 from '../images/slider/3.png';
import sliderImage4 from '../images/slider/4.png';
import sliderImage5 from '../images/slider/5.png';
import sliderImage6 from '../images/slider/6.png';
import sliderImage7 from '../images/slider/7.png';

const GoldenGuest = () => {
  return (
    <>
      <section className='w-full mt-8 sm:mt-14 mx-auto bg-gray-section px-4 py-8 sm:pt-20 sm:pb-12'>
        <div className='sm:mx-auto pb-10 sm:pb-20 text-white max-w-7xl flex flex-col sm:flex-row sm:justify-center lg:space-x-56'>
          <h2 className='text-default text-center sm:text-left flex-shrink-0 text-xl sm:text-4xl tracking-wide leading-normal font-bold uppercase'>
            Golden Guests
          </h2>
          <div className='flex flex-col items-center sm:items-start text-sm mt-4 sm:mt-auto sm:text-lg text-gray'>
            <div className='bcm text-center sm:text-left mb-5 leading-relaxed'>
              <p>
                <strong>The Golden Guests edition</strong> Looted Monkey are the
                rarest NFTs. They are all hand drawn and have no element in
                common with the regular collection.
              </p>
            </div>
            <div className='inline-block btn-gradient p-0.5 btn-animate max-w-max'>
              <a
                href='#'
                target='_blank'
                className='text-default uppercase font-bold text-xs sm:text-sm tracking-wider h-14 px-8 flex items-center justify-center max-w-max btn-bg-gradient'
              >
                <span>Join Us</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={6}
            spaceBetween={15}
            freeMode={false}
            pagination={{
              clickable: true,
            }}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={sliderImage1} alt='' />
              {/* <h3 className='mt-2 sm:mt-4 text-default uppercase font-bold text-center text-sm'>
                StreeApe
              </h3> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage2} alt='' />
              {/* <h3 className='mt-2 sm:mt-4 text-default uppercase font-bold text-center text-sm'>
                StreeApe
              </h3> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage3} alt='' />
              {/* <h3 className='mt-2 sm:mt-4 text-default uppercase font-bold text-center text-sm'>
                StreeApe
              </h3> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage4} alt='' />
              {/* <h3 className='mt-2 sm:mt-4 text-default uppercase font-bold text-center text-sm'>
                StreeApe
              </h3> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage5} alt='' />
              {/* <h3 className='mt-2 sm:mt-4 text-default uppercase font-bold text-center text-sm'>
                StreeApe
              </h3> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage6} alt='' />
              {/* <h3 className='mt-2 sm:mt-4 text-default uppercase font-bold text-center text-sm'>
                StreeApe
              </h3> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImage7} alt='' />
              {/* <h3 className='mt-2 sm:mt-4 text-default uppercase font-bold text-center text-sm'>
                StreeApe
              </h3> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default GoldenGuest;
