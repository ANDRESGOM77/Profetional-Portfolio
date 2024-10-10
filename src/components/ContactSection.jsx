import React from "react";
import email from "../assets/email.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"
import github from "../assets/github.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg"


const ContactSection = () => {
  return (
    <section
      className="bg-black w-full border-b-5 border-y-4 border-primary2"
      id="Contact"
    >
      <div className="grid sm:grid-cols-2 p-8">
        <div data-aos="zoom-in-down">
          <h1 className="text-white text-3xl font-extrabold">Let's talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            natus laudantium corrupti voluptate cumque iure labore, libero
            possimus ad non nam quas commodi molestias magni impedit aliquid, ab
            dolorem dolor!
          </p>
          <div className="mt-12">
            <h2 className="text-white text-base font-bold">Contact Data</h2>
            <ul className="mt-4">
                <li className="flex items-center p-2">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <img src={email} alt="new-post" width={24} height={24} />
                    </div>
                    <a href="" className="text-white text-sm ml-4">
                        <small className="block">Email</small>
                        <strong>andresgom2009@gmail.com</strong>
                    </a>
                </li>
                <li className="flex items-center p-2">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <img src={location} alt="new-post" width={24} height={24} />
                    </div>
                    <a href="" className="text-white text-sm ml-4">
                        <small className="block">Location</small>
                        <strong>andresgom2009@gmail.com</strong>
                    </a>
                </li>
                <li className="flex items-center p-2">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <img src={phone} alt="new-post" width={24} height={24} />
                    </div>
                    <a href="" className="text-white text-sm ml-4">
                        <small className="block">Phone</small>
                        <strong>+61 0404332389</strong>
                    </a>
                </li>
            </ul>
          </div>
          <div className="mt-12">
                <h2 className="text-white text-base font-bold">Socials</h2>
                <ul className="flex mt-4 space-x-4">
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="https://www.linkedin.com/in/andres-julian-gomez-suarez/">
                            <img src={linkedin} alt="linkedin" width={24} height={24} />
                        </a>
                    </li>
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="">
                            <img src={instagram} alt="instagram" width={24} height={24} />
                        </a>
                    </li>
                    <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <a href="">
                            <img src={facebook} alt="facebook" width={24} height={24} />
                        </a>
                    </li>
                </ul>
          </div>
        </div>
        <form className="mt-10 md:mt-0 ml-auto space-y-4" data-aos="zoom-in-down">
            <input type="text" placeholder="Name" className="w-full rounded-md py-3 px-4 bg-gray-100 text-white text-sm outline-primary border bg-transparent" />
            <input type="text" placeholder="Email" className="w-full rounded-md py-3 px-4 bg-gray-100 text-white text-sm outline-primary border bg-transparent" />
            <input type="text" placeholder="Subject" className="w-full rounded-md py-3 px-4 bg-gray-100 text-white text-sm outline-primary border bg-transparent" />
            <textarea placeholder="Message" rows="6" className="w-full rounded-md py-3 px-4 bg-gray-100 text-white text-sm outline-primary border border-white bg-transparent"></textarea>
            <button className="w-full md:block bg-primary2 p-4 font-bold border border-b-4 border-white rounded-3xl hover:text-primary"> Let's Connect</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
