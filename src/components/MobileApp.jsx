"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const AccordionItem = ({ header, features, benefits }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Item
      header={
         <div className="flex justify-between items-center md:w-[650px] lg:w-[1040px] w-[250px]">
                  <span className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg">
                    {header}
                  </span>
                  <IoIosArrowDown
                    className={`w-5 h-5 text-gray-800 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
      }
      onClick={() => setIsOpen((prev) => !prev)}
      className="border-b border-gray-300 py-2"
      contentProps={{ className: "transition-all duration-300" }}
    >
      <div className="text-gray-700 mt-2">
        <ul className="ml-5 space-y-2 text-sm sm:text-base">
          {features.map((feature, idx) => (
            <li key={idx}>
              <strong>{feature.title}</strong> {feature.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative group mt-6">
        <button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-2 px-4 rounded-md hover:scale-105 transition-all text-sm sm:text-base">
          {benefits.buttonText}
        </button>

        <div className="absolute top-[-500px] left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[600px] h-[300px] bg-white p-6 mt-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto z-10 border border-gray-200 overflow-y-auto">
          <ul className="list-disc ml-6 text-black space-y-2 bg-white mt-2 text-sm">
            {benefits.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Item>
  );
};

export default function Sms({ data }) {
  const systemData = data;
  const [popupImage, setPopupImage] = useState(null);

  return (
    <div className="w-full min-h-screen px-4 py-10 flex justify-center items-center">
      <div className="w-full max-w-[1400px] border p-4 sm:p-6 rounded-2xl shadow-xl bg-gradient-to-r from-slate-200 to-amber-50">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
          {systemData?.title || "No Title"}
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              {systemData?.subtitle || "No Subtitle"}
            </h2>
            <p className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base md:text-lg tracking-wide">
              {systemData?.description || "No Description"}
            </p>
          </div>

          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md transition-transform duration-500 hover:scale-105">
            <Image
              src={systemData?.overviewImage || "/fallback.jpg"}
              alt="Overview"
              width={700}
              height={300}
              className="w-full h-full object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px] rounded-xl"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1100px] border p-4 sm:p-6 rounded-xl shadow-md bg-gradient-to-r from-slate-200 to-stone-100">
            <Accordion transition transitionTimeout={300}>
              {systemData?.accordions?.map((accordion, idx) => (
                <AccordionItem
                  key={idx}
                  header={accordion?.header || "No Header"}
                  features={accordion?.features || []}
                  benefits={systemData?.benefits || {}}
                />
              ))}
            </Accordion>
          </div>
        </div>

        <div className="slider-container mt-12 rounded-xl shadow-lg p-4">
          <div className="slider-track flex flex-wrap justify-center gap-4 sm:gap-6">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {systemData.sliderImages.map((imgSrc, idx) => (
                  <Image
                    key={`${i}-${idx}`}
                    src={imgSrc}
                    alt={`Slider Image ${idx + 1}`}
                    width={170}
                    height={220}
                    className="cursor-pointer rounded-xl w-[140px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-[250px] object-cover shadow-md transition duration-500 hover:scale-105"
                    onClick={() => setPopupImage(imgSrc)}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {popupImage && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="relative w-full max-w-5xl h-auto p-4">
              <Image
                src={popupImage}
                alt="Popup"
                width={900}
                height={600}
                className="mx-auto max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setPopupImage(null)}
                className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shadow"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
