


import Image from 'next/image';


const AboutMe = () => {
  return (
    <section id='about'>
    <div className="flex flex-col lg:flex-row items-center sm:mt-10 justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-12 md:max-h-screen">
       
    <div className='flex flex-col justify-center items-center sm:text-center w-full rounded-md px-2 py-2  border-purple-600 mb-8 mt-8 transition-all duration-1000 ease-in-out hover:scale-105'>
      <span className="text-2xl mt-3 sm:text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600  via-pink-500 to-purple-500 mb-7 transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_8px_rgba(182,27,79)] rounded-full border-4 border-blue-500 animate-superman md:p-6 p-3  sm:mt-16 md:mt-20">ABOUT ERUM

      </span>
      <p className="lg:text-2xl text-base sm:text-xl m-5 text-black ">
      As a frontend web developer, I've developed a solid foundation in HTML, CSS, JavaScript, TypeScript, React, and Next.js. With a deep interest in building engaging and user-friendly interfaces, I continuously work on honing my skills to create seamless web experiences. I am always eager to explore new frameworks and tools that enhance the user experience.
                     
In addition to frontend development, I am also captivated by the dynamic field of artificial intelligence. I see AI as a transformative technology that intersects with many aspects of development and problem-solving. My curiosity drives me to stay informed about the latest advancements and explore how AI can be integrated into web technologies.

As a passionate learner, I thrive on the excitement of discovery and innovation. Each step in this journey fuels my enthusiasm for mastering new concepts and applying them in creative ways. The ever-evolving nature of technology inspires me to push boundaries and grow as a developer.
      </p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:w-1/2 transition duration-700 ease-in-out transform hover:scale-105">
        <Image
          src="/images/AI_img_1.jpeg"
          alt="Developer"
          className="rounded-lg lg:w-full lg:h-full   hover:shadow-xl"
          width={550}
          height={500}
        />
      </div>
    </div>
    </section>
  );
};

export default AboutMe;
