import React from 'react';

const Roadmap = () => {
  return (
    <>
      <section
        className='mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24 lg:mb-24 text-center  break-words'
        id='roadmap'
      >
        <h2 className='text-primary sm:text-center text-2xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase'>
          Launch Roadmap
        </h2>
        <div className='relative roadmap__content '>
          <div className='roadmap__wrapper grid w-full grid-cols-2 gap-8 items-center'>
            <div className='lg:w-96 w-40   justify-self-end'>
              <h1 className='font-bold text-default lg:text-2xl items-center flex justify-center bg-phase rounded-l-full py-8 uppercase'>
                Phase 1
              </h1>
            </div>
            <div className=' text-left text-default ml-4 text-sm lg:text-base lg:ml-12 '>
              <ul className='list-disc'>
                <li>access to Members Only Limited addition Merch</li>
                <li>
                  Giveaway of one regular monkey will be AirDropped during the
                  future discord contest
                </li>
                <li>
                  owning one of the looted monkeys will grant you access to all
                  our Vince shows around the world starting in Houston January
                  14th
                </li>
                <li>
                  {' '}
                  rarity criteria will be released on drop date of looted
                  monkeys
                </li>
              </ul>
            </div>
          </div>
          <div className='roadmap__wrapper grid w-full grid-cols-2 gap-8 items-center my-12 '>
            <div className='text-left text-default px-6'>
              <ul className='list-disc'>
                <li>
                  continued membership to Access NFT merchandise ; hoodies
                  ,shirts , hats ,stickers/posters{' '}
                </li>
                <li>
                  owning to a looted monkeys NFT makes you eligible for all
                  looted monkeys giveaways
                </li>
                <li>
                  Owners Will be able to pitch their own looted monkeys story
                  line with the best pitch winner selected by Trill Sammy,
                  winning a comic book NFT exclusively for looted monkeys
                  members
                </li>
              </ul>
            </div>
            <div className='lg:w-96 w-40   justify-self-start'>
              <h1 className='font-bold text-default lg:text-2xl items-center flex justify-center bg-line rounded-r-full py-8 uppercase'>
                Phase 2
              </h1>
            </div>
          </div>
          <div className='roadmap__wrapper grid w-full grid-cols-2 gap-8 items-center'>
            <div className='  lg:w-96 w-40   justify-self-end'>
              <h1 className='font-bold text-default lg:text-2xl items-center flex justify-center bg-phase rounded-l-full py-8 uppercase'>
                Phase 3
              </h1>
            </div>
            <div className=' text-left text-default ml-4 text-sm lg:text-base lg:ml-12 '>
              <ul className='list-disc'>
                <li>Continued access to Members Only NFT merchandise shop</li>
                <li>
                  Giveaway of one rare load a monkey randomly selected to a
                  discord member
                </li>
                <li>
                  looted monkeys creates their own YouTube channel to premiere
                  looted monkeys animated series where your NFT could featured
                  and monetized
                </li>
              </ul>
            </div>
          </div>
          <div className='roadmap__wrapper grid w-full grid-cols-2 gap-8 items-center my-12 '>
            <div className='text-left text-default px-6'>
              <ul className='list-disc'>
                <li>Continued access to members only NFT merchandise shop </li>
                <li>
                  monkeys in the Hills Los Angeles house party/ meeting VIP
                  holders access only
                </li>
                <li>donation from treasury to animals in need foundation</li>
                <li>
                  {' '}
                  access to sandbox estate in sandbox to show off and trade some
                  of your personal owned NFTS here is the roadmap
                </li>
              </ul>
            </div>
            <div className='lg:w-96 w-40   justify-self-start'>
              <h1 className='font-bold text-default lg:text-2xl items-center flex justify-center bg-line rounded-r-full py-8 uppercase'>
                Phase 4
              </h1>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col space-y-5 sm:space-y-8'>
          <div className='grid grid-cols-4 gap-3 sm:gap-16 items-center sm:items-center justify-center'>
            <div className='text-left space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base text-gray'>
                <ul>
                  <li>access to Members Only Limited addition Merch</li>
                  <li>
                    Giveaway of one regular monkey will be AirDropped during the
                    future discord contest
                  </li>
                  <li>
                    owning one of the looted monkeys will grant you access to
                    all our Vince shows around the world starting in Houston
                    January 14th
                  </li>
                  <li>
                    {' '}
                    rarity criteria will be released on drop date of looted
                    monkeys
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-center sm:items-center justify-center'>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base text-gray'>
                <ul>
                  <li>
                    continued membership to Access NFT merchandise ; hoodies
                    ,shirts , hats ,stickers/posters{' '}
                  </li>
                  <li>
                    owning to a looted monkeys NFT makes you eligible for all
                    looted monkeys giveaways
                  </li>
                  <li>
                    Owners Will be able to pitch their own looted monkeys story
                    line with the best pitch winner selected by Trill Sammy,
                    winning a comic book NFT exclusively for looted monkeys
                    members
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-center sm:items-center justify-center'>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base text-gray'>
                <ul>
                  <li>Continued access to Members Only NFT merchandise shop</li>
                  <li>
                    Giveaway of one rare load a monkey randomly selected to a
                    discord member
                  </li>
                  <li>
                    looted monkeys creates their own YouTube channel to premiere
                    looted monkeys animated series where your NFT could featured
                    and monetized
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-center sm:items-center justify-center'>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base text-gray'>
                <ul>
                  <li>
                    Continued access to members only NFT merchandise shop{' '}
                  </li>
                  <li>
                    monkeys in the Hills Los Angeles house party/ meeting VIP
                    holders access only
                  </li>
                  <li>donation from treasury to animals in need foundation</li>
                  <li>
                    {' '}
                    access to sandbox estate in sandbox to show off and trade
                    some of your personal owned NFTS here is the roadmap
                  </li>
                </ul>
              </p>
            </div>
          </div>  
        </div> */}
      </section>
    </>
  );
};

export default Roadmap;
