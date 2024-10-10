import React from "react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title:"Web Developer",
      icon: "https://img.icons8.com/?size=100&id=53451&format=png&color=000000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem, exercitationem odit optio eos vero ipsam cumque qui, adipisci consequatur dicta reprehenderit ad deserunt quo facere. Ab est repellat exercitationem.",
    },
    {
      id: 2,
      title:'UX/UI Designer',
      icon: "https://img.icons8.com/?size=100&id=mL7ftLFaIUTw&format=png&color=000000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem, exercitationem odit optio eos vero ipsam cumque qui, adipisci consequatur dicta reprehenderit ad deserunt quo facere. Ab est repellat exercitationem.",
    },
    {
      id: 3,
      title:'Management',
      icon: "https://img.icons8.com/?size=100&id=x9dtGLKGodNd&format=png&color=000000",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem, exercitationem odit optio eos vero ipsam cumque qui, adipisci consequatur dicta reprehenderit ad deserunt quo facere. Ab est repellat exercitationem.",
    },
  ];
  return (
    <section className="mt-4 md:mt-40" id="services">
        <h2 className="text-center text-4xl font-bold text-gray-950 sm:text-6xl lg:mb-12" data-aos='fade-ip'>My Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 xl:gap-16 xl:px-16 mt-10 md:mt-0 ">
        {services.map(service =>(
            <div key={service.id} className="max-w-3/4 p-6 bg-white border border-b-4 border-black rounded-3xl gap-y-4">
                <img src={service.icon} alt="Service Icon" className="w-20 h-20 ml-4" />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary">{service.title}</h5>
                <p className="mb-3 font-normal">{service.description}</p>
            </div>
        ))}
        </div>
    </section>
  );
};

export default ServicesSection;
