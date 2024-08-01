import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import JobList from '../../Data/JobList';

const JobContainer = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {JobList.map((job) => {
          const { id, company, logo, link, title, description, datePosted, location } = job;
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-slate-200 rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive /> {datePosted}
                </span>
              </span>
              <h6 className='text-[#ccc]'>{location}, India</h6>
              <p className='text-gray-700 text-[13px] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{description}</p>
              <div className='company flex items-center gap-2'>
                <img src={logo} alt={`${company} logo`} className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-slate-300'>
                  Apply
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobContainer;
