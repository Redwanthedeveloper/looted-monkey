import React from 'react';
import Collapsible from 'react-collapsible';

const Faq = () => {
  return (
    <>
      <section className='mt-10 sm:mt-8' id='faq'>
        <div className='max-w-7xl mx-auto px-4 sm:mt-24 sm:px-0 lg:mt-32 text-center'>
          <h2 className='text-default sm:text-center text-xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase'>
            Frequently Asked Questions
          </h2>
          <div className='px-4 pt-4 sm:pt-8'>
            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='Can we expect Merch? ?'>
                  <span className='text-gray font-normal lowercase'>
                  All owners will receive a merch care 
                  package by Q1 of 2022 ,& merch Live on site
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='What can my monkey do? '>
                  <span className='text-gray font-normal lowercase'>
                  Your monkey allows you to vote for use of treasury funds ,instant white-list for all 
                  companion project mints, and makes you eligible for all giveaways 
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='How do i mint? '>
                  <span className='text-gray font-normal lowercase'>
                  You can satrt minting Using MetaMask, wallet connect , wallet link
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='What is mint price for looted monkeys? '>
                  <span className='text-gray font-normal lowercase'>
                  Pre-sale mint cost is 0.02 eth + gas fee
                  Public mint cost is 0.03 eth + gas fee

                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='When is presale and when is the public sale? ?'>
                  <span className='text-gray font-normal lowercase'>
                  Pre sale starts on Dec 31st At 8pm EST -Jan 2nd 
                  Public sale starts on Jan 2nd at 8pm EST - Jan 3rd at 1am
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='What rights do i have to the artwork?'>
                  <span className='text-gray font-normal lowercase'>
                  Purchasing a chimp grants you full and complete rights 
                  to do whatever you want with your NFT and the artwork 
                  included, commercially and otherwise!
                  </span>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
