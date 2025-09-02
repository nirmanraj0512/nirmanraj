import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
const projects=[
    { 
        name:"3D-Portfolio",
        year:"2024",
        align:"right",
        image:"/Image/portfolio.jpg",
        link:'https://nirman-stzk.onrender.com/',
        desc:"A 3D Portfolio Website"
    },
    {
        name:"Writer Desk",
        year:"2024",
        align:"left",
        image:"/Image/blog.png",
        link:'https://writer-desk-d7b1.onrender.com/',
        desc:"A Blogging Webiste"
    },
    {
        name:"ToDo",
        year:"2023",
        align:"right",
        image:"/Image/todo.png",
        link:'https://github.com/nirmanraj0512/toDo',
        desc:"A ToDo Webiste"
    },
    
]

const ProjectsMain=()=>{
  return (
    <div id='projects' className='max-w-[1200px]  mx-auto px-4'>
        <motion.div
        variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false,amount:0}}
        >
        <ProjectsText/>
        </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item,index)=>{
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} desc={item.desc}/>
            })}
        </div>

    </div>
  )
}

export default ProjectsMain