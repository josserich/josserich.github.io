import React, { useState } from "react";
import {
  Accounting,
  Cafetaria,
  HospitalQueue,
  ExpenseTracker,
} from "../assets";

const Project = () => {
  const data = [
    {
      ProjectId: 1,
      ProjectName: "Accounting",
      ProjectImg: Accounting,
      ProjectDesc:
        "A desktop application for managing company accounting. It automatically generates financial statements, including the statement of financial position, profit and loss, and changes in equity. Built with Electron, React Router, Tailwind CSS, SQLite3, and a modern UI/UX.",
    },
    {
      ProjectId: 2,
      ProjectName: "Hospital Information System",
      ProjectImg: HospitalQueue,
      ProjectDesc:
        "A web application designed to manage hospital queues efficiently. Built with React, Express, MongoDB, and a modern UI/UX.",
    },
    {
      ProjectId: 3,
      ProjectName: "Cafeteria App",
      ProjectImg: Cafetaria,
      ProjectDesc:
        "An Android application for managing cafeteria operations. Built with React Native, Expo Router, Expo SQLite, and a modern UI/UX.",
    },
    {
      ProjectId: 4,
      ProjectName: "Expense Tracker App",
      ProjectImg: ExpenseTracker,
      ProjectDesc:
        "An Android application for managing personal finances and achieving financial independence. Built with React Native, Expo Router, Expo SQLite, and a modern UI/UX.",
    },
  ];
  return (
    <div className="bg-[#F6F8FE] p-5">
      <div className="w-full lg:m-auto lg:w-[1100px]">
        <div className="text-4xl font-bold text-[#3357F4] border-b-8 pb-5 inline-block mb-6">
          My Projects{" "}
        </div>
        <div className="text-xl italic mb-6">
          " Software that helps me work, Software is just a tool that makes a
          product useful depending on ideas, innovation and creativity. "People{" "}
          <span className="font-bold">don't care about what you say</span>,
          <span className="font-bold"> they care about </span>{" "}
          <span className="font-bold text-[#3357F4]">what you build.</span>"
           Mark Zuckerberg.
        </div>
        <div className="w-full lg:w-[860px] lg:m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((item, i) => (
              <div
                className="p-3 bg-white rounded-2xl shadow-lg hover:-translate-y-20 hover:scale-110 cursor-pointer duration-300 ease-in-out"
                key={i}
              >
                <img src={item.ProjectImg} alt="" className="mb-3" />
                <div className="p-4">
                  <div className="font-bold text-3xl tracking-wider mb-3">
                    {item.ProjectName}
                  </div>
                  <div className="text-lg mb-5">{item.ProjectDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
