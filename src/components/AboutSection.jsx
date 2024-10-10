import React from "react";

const AboutSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Assistant Manager",
      company: "Cali Press",
      date: "May 2023 - Sep 2024",
    },
    {
      id: 2,
      role: "Team Manager",
      company: "Crowne Plaza Hotels & Resort",
      date: "Apr 2023 - Sep 2024",
    },
    {
      id: 3,
      role: "Team Manager",
      company: "Guzman y Gomez",
      date: "Oct 2020 - Dec 2024",
    },
  ];
  const education = [
    {
      id: 1,
      role: "Full-Stack Developer",
      school: "University of Sydney",
      year: "2023-2024",
    },
    {
      id: 2,
      role: "Business IV Administration and Management",
      school: "Mercury College",
      year: "2022-2023",
    },
    {
      id: 3,
      role: "Business III Administration and Management",
      school: "Mercury College",
      year: "2020-2022",
    },
  ];
  return (
  <section className="mt-9 md:mt-40" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col z-10 h-full">
                <h2 className="text-4xl text-green-950 sm:text-6xl lg:mb-8 font-bold" data-aos='zoom-in-up'>My Education</h2>
                <div className="flex justify-start">
                    <div className="space-y-8 py-8 w-full md:w-4/5" data-aos="zoom-in-up">
                        {education.map((Element)=>(
                            <div key={Element.id} className="flex items-center rounded-xl bg-primary p-5 md:justify-end">
                            <div className="w-1/4">
                                <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer" />
                            </div>
                            <div className="w-3/4 pl-4">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary2">{Element.role}</h5>
                                <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{Element.school}</p>
                                <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{Element.year}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
            <h2 className="md:text-center text-4xl text-green-950 sm:text-6xl lg:mb-8 font-bold" data-aos='zoom-in-up'>My Experience</h2>
            <div className="flex justify-end">
                    <div className="space-y-8 py-8 w-full md:w-4/5" data-aos="zoom-in-up">
                        {experiences.map((Element)=>(
                            <div key={Element.id} className="flex items-center rounded-xl bg-primary p-5 md:justify-end">
                            <div className="w-1/4">
                                <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer" />
                            </div>
                            <div className="w-3/4 pl-4">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary2">{Element.role}</h5>
                                <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{Element.company}</p>
                                <p className="max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">{Element.date}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  </section>
  )
};

export default AboutSection;
