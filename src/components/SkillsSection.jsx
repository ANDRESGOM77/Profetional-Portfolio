import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      icon: FaHtml5,
    },
    {
      id: 2,
      icon: IoLogoCss3,
    },
    {
      id: 3,
      icon: IoLogoJavascript,
    },
    {
      id: 4,
      icon: FaBootstrap,
    },
    {
      id: 5,
      icon: RiTailwindCssFill,
    },
    {
      id: 6,
      icon: GrMysql,
    },
    {
      id: 7,
      icon: BiLogoPostgresql,
    },
    {
      id: 8,
      icon: FaNodeJs,
    },
    {
      id: 9,
      icon: SiHandlebarsdotjs,
    },
    {
      id: 10,
      icon: SiExpress,
    },
    {
      id: 11,
      icon: SiMongodb,
    },
    {
      id: 12,
      icon: FaReact,
    },
    {
      id: 13,
      icon: GrGraphQl,
    },
  ];
  return (
    <section id="Skills">
      <div className="bg-black w-full border-b-5 border-y-4 border-primary2 flex flex-wrap justify-center p-2 gap-0 lg:gap-24">
        {skills.map((skill) => (
          <div key={skill.id} data-aos="zoom-in-up">
            <figure className="w-20 h-20 flex justify-center items-center rounded-full ml-2 mt-2">
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.7)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(9px)",
                }}
              ></div>
              <div
                key={skill.icon}
                alt="skill icon"
                className="w-10 h-12 absolute z-10"
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
