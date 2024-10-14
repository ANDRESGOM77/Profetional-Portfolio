import React from "react";
import html from "../assets/html.svg"
import css from "../assets/css3.svg"
import js from "../assets/javascript.svg"
import bootstrap from "../assets/bootstrap.svg"
import exp from "../assets/express-js.svg"
import mongo from "../assets/mongo-db.svg"
import tailwind from "../assets/tailwind-css.svg"
import react from "../assets/react.svg"
import postgres from "../assets/postgresql.svg"
import graphql from "../assets/graphql.svg"
import node from "../assets/nodejs.svg"
import mySql from "../assets/icons8-mysql.svg"



const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      icon: html,
    },
    {
      id: 2,
      icon: css,
    },
    {
      id: 3,
      icon: js,
    },
    {
      id: 4,
      icon: bootstrap,
    },
    {
      id: 5,
      icon:  tailwind,
    },
    {
      id: 6,
      icon: node ,
    },
    {
      id: 8,
      icon: postgres,
    },
    {
      id: 9,
      icon: mongo,
    },
    {
      id: 10,
      icon: exp,
    },
    {
      id: 11,
      icon: mySql,
    },
    {
      id: 12,
      icon: react,
    },
    {
      id: 13,
      icon: graphql,
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
              <img
                src={skill.icon}
                alt="skill icon"
                className="w-22 h-16 absolute z-10"
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
