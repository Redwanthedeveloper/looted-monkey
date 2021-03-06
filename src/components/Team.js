import React from 'react';
import teamImage1 from '../images/team-image.png';
import teamImage2 from '../images/team/2.png';
import teamImage3 from '../images/team/3.png';

const Team = () => {
  return (
    <>
      <section className='bg-black' id='team'>
        <div className='mt-10 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-0 pb-10 sm:pb-14 text-center'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-primary sm:text-center text-2xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase'>
              our team
            </h2>
            <div className='bcm text-gray text-sm sm:text-base sm:w-7/12 px-6 mx-auto'>
              <p>
                The Looted monkey was created by Sammy along with Entrepreneurs,
                Blockchain experts, Marketing players, and Artists. We are
                committed to delivering a cutting-edge experience and making{' '}
                this project a success.
              </p>
            </div>
          </div>
        </div>

        <div className=' mx-auto max-w-7xl px-4 sm:mt-24 sm:px-0 pb-10 sm:pb-14 text-center'>
          <ul className='grid grid-cols-2 gap-2 sm:gap-6 gap-y-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 lg:gap-y-14 mt-10'>
            <li className='text-center xl:text-left bg-primary rounded-xl overflow-hidden p-2 lg:p-6 relative'>
              <div className='space-y-3 xl:space-y-4'>
                <img src={teamImage1} alt='' />
                <div className='space-y-2'>
                  <div className='font-medium text-lg leading-6 space-y-1 flex flex-col items-center'>
                    <h3 className='text-white uppercase text-sm sm:text-lg font-bold text-default'>
                      sammy (founder)
                    </h3>
                    <p className='text-xs sm:text-sm font-normal text-primary text-center'>
                      Manager of community, social media / discord
                    </p>
                  </div>
                  <ul className='flex justify-center space-x-2 sm:space-x-2 absolute top-3 right-3'>
                    <li>
                      <a
                        href='#'
                        className='block bg-black rounded-full hover:ring-2 hover:ring-primary p-2'
                      >
                        <span className='sr-only'>Instagram</span>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 448 512'
                          className='text-primary w-8 h-8'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className='text-center xl:text-left bg-primary rounded-xl overflow-hidden p-2 lg:p-6 relative'>
              <div className='space-y-3 xl:space-y-4'>
                <img src={teamImage2} alt='' />
                <div className='space-y-2'>
                  <div className='font-medium text-lg leading-6 space-y-1 flex flex-col items-center'>
                    <h3 className='text-white uppercase text-sm sm:text-lg font-bold text-default'>
                      Dro (Artist)
                    </h3>
                    <p className='text-xs sm:text-base font-normal text-primary'>
                      Lead artist of monkeys
                    </p>
                  </div>
                  <ul className='flex justify-center space-x-2 sm:space-x-2 absolute top-3 right-3'>
                    <li>
                      <a
                        href='#'
                        className='block bg-black rounded-full hover:ring-2 hover:ring-primary p-2'
                      >
                        <span className='sr-only'>Instagram</span>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 448 512'
                          className='text-primary w-8 h-8'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className='text-center xl:text-left bg-primary rounded-xl overflow-hidden p-2 lg:p-6 relative'>
              <div className='space-y-3 xl:space-y-4'>
                <img src={teamImage3} alt='' />
                <div className='space-y-2'>
                  <div className='font-medium text-lg leading-6 space-y-1 flex flex-col items-center'>
                    <h3 className='text-white uppercase text-sm sm:text-lg font-bold text-default text-center'>
                      neighborhood <br /> (Discord developer)
                    </h3>
                    <p className='text-xs sm:text-base font-normal text-primary'>
                      Programmer for looted monkeys discord
                    </p>
                  </div>
                  <ul className='flex justify-center space-x-2 sm:space-x-2 absolute top-3 right-3'>
                    <li>
                      <a
                        href='#'
                        className='block p-2 bg-black rounded-full hover:ring-2 hover:ring-primary '
                      >
                        <span className='sr-only'>Instagram</span>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 448 512'
                          className='text-primary w-8 h-8'
                          height='3em'
                          width='3em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Team;
