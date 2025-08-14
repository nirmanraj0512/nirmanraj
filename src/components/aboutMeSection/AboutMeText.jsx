import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'> 
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        I am a final-year student pursuing a B.Tech in Computer Science and Systems Engineering from KIIT University, with a minor in Sustainable Economics. My passion lies in Full-Stack Web Development, where I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), alongside proficiency in Next.js and TypeScript. I am focused on building efficient, high-performance, and scalable web applications.

        My project experience has provided me with a strong command of the entire development lifecycle. I have designed and implemented full-stack platforms from scratch, integrating backend services like Appwrite and ensuring persistent data storage using Local Storage. I have hands-on experience developing features crucial for modern applications, including secure user authentication for robust session management, rich text editors to streamline content creation, and dynamic routing for seamless navigation.

        To create responsive and efficient user interfaces, I utilize state management libraries like Redux to optimize data flow and application performance. My work is grounded in a solid understanding of system design, networking, and a continuous focus on data structures and algorithms. I am always eager to apply these skills to build impactful software and explore new technologies.
      </p>
      
      <a 
        href="https://github.com/nirmanraj0512" 
        target="_blank" 
        rel="noopener noreferrer"
        className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan hover-cyan-shadow'
      >
        My Projects
      </a>
    </div>
  )
}

export default AboutMeText
