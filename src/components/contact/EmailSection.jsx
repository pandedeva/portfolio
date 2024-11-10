"use client";

import React from "react";
import githubIcon from "../../../public/github-icon.svg";
import linkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Let`s Connect</h5>
        <p className="text-slate-400 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/pandedeva"} target="_blank">
            <Image src={githubIcon} alt={"Github"}></Image>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/pande-deva-74b728220/"}
            target="_blank"
          >
            <Image src={linkedinIcon} alt={"linkedin"}></Image>
          </Link>
        </div>
      </div>

      {/* email Form */}
      <div>
        <form className="flex flex-col space-y-7">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-3">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="yanto@gmail.com"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-3">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="Just saying hi"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-3">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder:text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your message..."
            />
          </div>

          <button
            className="bg-primary-700 hover:bg-primary-800 font-medium py-2.5 px-5 rounded-lg w-full"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* bubble blue */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      {/* bubble blue */}
    </section>
  );
};

export default EmailSection;
