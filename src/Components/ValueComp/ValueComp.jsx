import React from 'react';
import simple from '../../assets/simple.jpg';
import innovative from '../../assets/innovative.jpg';
import reliable from '../../assets/reliable.png';

const ValueComp = () => {
  const values = [
    {
      title: 'Simplicity',
      description: 'Things being made beautiful are at the heart of everything we do.',
      img: simple,
    },
    {
      title: 'Innovation',
      description: 'We innovate to find better solutions for our customers.',
      img: innovative,
    },
    {
      title: 'Reliability',
      description: 'We strive to be a trusted and reliable partner.',
      img: reliable,
    },
  ];

  return (
    <div className='mb-16 mt-24 px-4 md:px-8'>
      <h1 className='text-textColor text-2xl md:text-3xl py-8 pb-12 font-bold w-full md:w-96'>
        The values that hold us true and to account
      </h1>

      <div className='grid gap-10 md:gap-16 grid-cols-1 md:grid-cols-3 items-center'>
        {values.map((value, index) => (
          <div key={index} className="singleGrid rounded-2xl hover:bg-stone-200 p-6">
            <div className='flex items-center gap-3'>
              <div className='imgDiv p-1 rounded-xl bg-[#dedef8] h-10 w-10 flex items-center justify-center'>
                <img src={value.img} alt={value.title} className="h-8 w-8"/>
              </div>
              <span className='font-semibold text-textColor text-lg'>{value.title}</span>
            </div>
            <p className='text-sm text-textColor opacity-70 py-4 font-semibold'>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ValueComp;
