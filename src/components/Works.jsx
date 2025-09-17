import React from "react";
import { FaLaptopCode } from "react-icons/fa6";

const Works = () => {
  const data = [
    {
      WorkId: 1,
      WorkTime: "2024 – 2025",
      WorkPlace: "Freelance Fullstack Developer",
      WorkDesc: `Developed web, desktop, and Android applications primarily using JavaScript, tailored to client requirements. Handled projects from platforms such as Fiverr, Upwork, and other freelance sources. Provided feature-based pricing, maintained application security, and ensured full accountability for bugs and updates.`,
    },
    {
      WorkId: 2,
      WorkTime: "2023 – 2024",
      WorkPlace: "Web & Mobile Developer, CV. Medika Solusi Digital",
      WorkDesc: `The development of web, desktop, and Android applications for healthcare systems using JavaScript technologies. Ensured system reliability, resolved issues proactively, and integrated solutions with the Ministry of Health’s policies and standards in Indonesia.`,
    },
    {
      WorkId: 3,
      WorkTime: "2022 – 2023",
      WorkPlace: "Web Developer Intern, Sekolah Ekspor",
      WorkDesc: `Focused on front-end development and responsive design using Laravel Blade. Collaborated with the team to integrate APIs and build a news platform highlighting student export success stories in international markets.`,
    },
    {
      WorkId: 4,
      WorkTime: "2021 – 2022",
      WorkPlace: "Mobile Technician, STTSI Medan",
      WorkDesc: `Repaired smartphones and mobile devices with a focus on transparency, honesty, and effective problem-solving. Ensured customer satisfaction and full accountability for all services provided.`,
    },
  ];
  return (
    <div className="p-5">
      <div className="w-full lg:w-[1000px] lg:m-auto">
        <div className="inline-block border-b-8 border-b-[#3357F4] pb-4 my-5 mb-10">
          <div className="flex items-center gap-4">
            <FaLaptopCode className="text-5xl text-[#3357F4]" />
            <div className="text-3xl font-bold tracking-wider text-[#3357F4]">
              Working Experience
            </div>
          </div>
        </div>
        {/* list  */}
        {data.map((el) => (
          <div className="flex" key={el.WorkId}>
            <div className="w-[30%] border-r-[5px] border-[#3357F4] lg:w-[150px]">
              <div className="relative">
                <div className="font-bold text-lg text-[#3357F4] me-3">
                  {el.WorkTime}
                </div>
                <div className="bg-[#3357F4] w-[14px] h-[14px] rounded-full absolute right-[-10px] top-0"></div>
              </div>
            </div>
            <div className="pb-3 flex-1">
              <div className="ps-4 mb-1 font-bold text-[#3357F4] text-xl tracking-wider">
                {el.WorkPlace}
              </div>
              <div className="ps-4 mb-1">{el.WorkDesc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
