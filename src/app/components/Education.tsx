import Image from "next/image";
import React from "react";

function Education() {
  return (
    <>
    <section id="education">
      <div className="flex flex-col justify-center items-center sm:text-center w-full  rounded-md px-2 py-2  mb-8 sm:mt-36 lg:mt-14 transition-all duration-1000 ease-in-out hover:scale-105">
        <span className="text-2xl sm:text-4xl  sm:mt-8 md:mt-10 md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600  via-pink-500 to-purple-500 mb-7 transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_8px_rgba(182,27,79)] rounded-full border-4 border-blue-500 animate-superman p-2 md:p-4  mt-5">
          EDUCATION
        </span>

        <p className="lg:text-2xl text-base sm:text-xl m-5 text-black ">
          I matriculated in 2010 from Islamia Girls High School with 81% in
          Science. Currently, I am pursuing my Intermediate education and passed
          HSC-Part I in 2024 with 86% in Commerce. I also completed an
          Intermediate Level English Language Course from SKH Online Education.
          Now, I am enrolled in the Governor Initiative for Artificial
          Intelligence, Web 3.0, and Metaverse. In Quarter 1, I have learnt
          TypeScript, and in Quarter 2, I am studying Next.js. Additionally, I
          have joined the Xounity Online Frontend Bootcamp, where I am learning
          the basics of HTML, CSS, JavaScript, DOM Manipulation, and React.js.
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-full mt-6 md:mb-10 sm:hover:scale-105 hover:scale-110">
  <Image
    src="/images/certificate.png"
    alt="Certificate Image"
    width={800} // Native width of the image for larger screens
    height={500} // Native height of the image for larger screens
    className="lg:w-[800px] lg:h-auto md:w-[600px] md:h-auto sm:w-[400px] sm:h-auto w-[300px] h-auto transition-shadow duration-300 ease-in hover:shadow-[0_0_10px_10px_rgba(182,27,79)] rounded-lg border-4 border-blue-500 p-2 animate-superman"
  />
</div>
</section>
    </>
  );
}

export default Education;
