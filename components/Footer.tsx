/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Pronto para levar <span className="text-purple">sua</span> presença
          digital para o próximo nível?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato comigo hoje para discutirmos como eu posso te ajudar
          a alcançar seus objetivos.
        </p>
        <a href="mailto:breno.hs@outlook.com">
          <MagicButton
            title="Vamos entrar em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-small md:font-normal font-light">
          Copyright © 2025 Breno
        </p>
        <div className="flex items-center md:mt-0 mt-3 md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              href={profile.link}
              target="_blank"
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={`${profile.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
