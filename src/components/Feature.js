import React from 'react';
import imagesGif from '../images/image.gif';
const Feature = () => {
  return (
    <>
      <section
        id='feature'
        className='bg-gray-section sm:bg-black mt-10 pt-10 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-0 text-center'
      >
        <div className='text-center text-xl text-primary font-semibold uppercase'>
          The specs
        </div>
        <div className='grid grid-cols-12 sm:grid-cols-10 gap-3 align-top py-4 sm:py-12'>
          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Art</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              With the Looted monkey, ART becomes New communication. You will Find 
              how we will use our NFTfor goods in the next phases.
            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Engagement</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              We encourage our community to Engage  with us and be  part of
              the looted monkey Community worlwide.
            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Unique</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              Once you Are A Proud Looted Monkey Owner you will have the Prestige of being 
              the only and unique Holder of this NFT .            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Community</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
              Be part of a smart and NFT  community. Biggest Ambitions,Perfect goals,Art
               Above All.
            </p>
          </div>

          <div className='border border-opacity-30 border-default items-center justify-center space-y-2 sm:space-y-6 px-4 sm:px-6 py-5 sm:py-10 hover:bg-default hover:text-black col-span-6 sm:col-span-2 text-default'>
            <h3 className='text-lg sm:text-2xl font-bold '>Consistency</h3>
            <p className='hover:text-black font-normal text-xs sm:text-sm leading-relaxed text-gray'>
               The Looted Monkey project is designed to evolve and expand Be part of the Experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
