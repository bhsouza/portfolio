/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dCard";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export function Card({
  title,
  des,
  img,
  iconLists,
  linkGithub,
  linkDeploy,
}: {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  linkGithub: string;
  linkDeploy: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.1] border-black/[0.1] w-full h-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
        >
          {title}
        </CardItem>
        <CardItem translateZ="60" className="mt-2">
          <p className="text-[#BEC1DD] lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
            {des}
          </p>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative flex items-center justify-center mb-4 rounded-3xl overflow-hidden">
            <div
              className="relative w-full overflow-hidden sm:h-[40vh] h-[30vh]"
              style={{ backgroundColor: "#13162D" }}
            >
              <img src="/bg.png" alt="bgimg" />
            </div>
            <img src={img} alt="cover" className="z-10 absolute bottom-0" />
          </div>
        </CardItem>
        <CardItem translateZ="60" className="w-full">
          <div className="flex items-center">
            {iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem translateZ={30}>
            <Link
              href={linkGithub}
              target="__blank"
              className="px-4 py-2 text-sm sm:text-xl font-normal dark:text-white"
            >
              Github
            </Link>
          </CardItem>
          <CardItem translateZ={30}>
            <Link
              href={linkDeploy}
              target="__blank"
              className="flex justify-center items-center"
            >
              <p className="flex text-sm sm:text-xl text-purple">Veja o Site</p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
