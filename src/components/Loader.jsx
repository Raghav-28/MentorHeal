import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

export default function Loader({ text }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full p-3 overflow-y-scroll backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <BiLoaderAlt size={30} color="#4a7999" className="animate-spin" />
        <h1 className=" text-[#4a7999] font-semibold text-lg">{text}</h1>
      </div>
    </div>
  );
}
