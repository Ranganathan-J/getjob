import React, { useRef, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const SearchComp = () => {
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const releRef = useRef(null);
  const typeRef = useRef(null);
  const LevelRef = useRef(null);

  const clearRef = () => {
    releRef.current.value = "";
    typeRef.current.value = "";
    LevelRef.current.value = "";
  };

  const handleJobRoleChange = (e) => setJobRole(e.target.value);
  const handleCompanyChange = (e) => setCompany(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const clearJobRole = () => setJobRole("");
  const clearCompany = () => setCompany("");
  const clearCity = () => setCity("");

  return (
    <div className="searchDiv grid bg-greyIsh rounded-[10px] p-6 sm:p-[3rem]">
      <form action="">
        <div className="firstDiv flex flex-col sm:flex-row justify-between items-center rounded-[10px] gap-4 sm:gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh">
          <div className="flex gap-2 items-center w-full sm:w-auto">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              value={jobRole}
              className="bg-transparent text-blueColor focus:outline-none w-full sm:w-auto"
              placeholder="Search by job role"
              onChange={handleJobRoleChange}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer"
              onClick={clearJobRole}
            />
          </div>

          <div className="flex gap-2 items-center w-full sm:w-auto">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              value={company}
              className="bg-transparent text-blueColor focus:outline-none w-full sm:w-auto"
              placeholder="Search by company"
              onChange={handleCompanyChange}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer"
              onClick={clearCompany}
            />
          </div>

          <div className="flex gap-2 items-center w-full sm:w-auto">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              value={city}
              className="bg-transparent text-blueColor focus:outline-none w-full sm:w-auto"
              placeholder="Search by location"
              onChange={handleCityChange}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer"
              onClick={clearCity}
            />
          </div>
          <button className="bg-blueColor w-full sm:w-auto p-3 sm:p-5 sm:px-10 rounded-[10px] text-white">
            Search
          </button>
        </div>
      </form>

      <div className="secondDiv flex flex-col sm:flex-row items-center gap-4 sm:gap-10 justify-center mt-3">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
            ref={releRef}
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
            ref={typeRef}
          >
            <option value="">Full-time</option>
            <option value="">Part-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
            ref={LevelRef}
          >
            <option value="">Entry-level</option>
            <option value="">Experienced</option>
            <option value="">Professional</option>
            <option value="">Senior</option>
          </select>
        </div>

        <span
          onClick={clearRef}
          className="text-white cursor-pointer bg-slate-400 p-2 rounded-lg"
        >
          Clear All
        </span>
      </div>
    </div>
  );
};

export default SearchComp;
