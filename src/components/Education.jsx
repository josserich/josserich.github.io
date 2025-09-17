import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  const data = [
    {
      EducateId: 1,
      EducateYear: `2019 - 2023`,
      EducateName: `Bachelor of Economics in Management, University of Prima Indonesia, Medan`,
      EducateLevel: "Bachelor's Degree",
    },
    {
      EducateId: 2,
      EducateYear: `2016 - 2019`,
      EducateName: `Senior High School National 4,  Medan.`,
      EducateLevel: "Senior High School",
    },
    {
      EducateId: 3,
      EducateYear: `2013 - 2016`,
      EducateName: `Junior High School Saint Mary,  Karo Highland.`,
      EducateLevel: "Junior High School",
    },
    {
      EducateId: 4,
      EducateYear: `2007 - 2013`,
      EducateName: `Elementary School Saint Joseph, Karo Highland.`,
      EducateLevel: "Elementary School",
    },
  ];
  return (
    <div className="bg-[#F6F8FE] p-5 min-h-screen">
      <div className="w-full lg:w-[1000px] lg:m-auto">
        <div className="inline-block border-b-8 border-b-[#3357F4] pb-4 my-5 mb-10">
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-5xl text-[#3357F4]" />
            <div className="text-3xl font-bold tracking-wider text-[#3357F4]">
              Education
            </div>
          </div>
        </div>
        {/* list  */}
        {data.map((el) => (
          <div className="flex" key={el.EducateId}>
            <div className="border-r-[5px] border-[#3357F4] w-[30%] lg:w-[150px]">
              <div className="relative">
                <div className="font-bold text-lg text-[#3357F4] me-3">
                  {el.EducateYear}
                </div>
                <div className="bg-[#3357F4] w-[14px] h-[14px] rounded-full absolute right-[-10px] top-0"></div>
              </div>
            </div>
            <div className="ps-4 pb-4 flex-1 mb-3">
              <div className="font-bold text-[#3357F4] text-2xl tracking-wider mb-2">
                {el.EducateLevel}
              </div>
              <div className="text-xl ms-3">{el.EducateName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
