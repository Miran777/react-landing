import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"
import project1 from "../assets/project-1.jpeg"
import project2 from "../assets/project-2.jpeg"
import project3 from "../assets/project-3.jpeg"
import project4 from "../assets/project-4.jpeg"
import project5 from "../assets/project-5.jpeg"
import project6 from "../assets/project-6.jpeg"
import project7 from "../assets/project-7.jpeg"


const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify0center items-center text-center p-16 text-deep-blue`


    return (
        <motion.div variants={projectVariant} className="relative"> 
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair ">
                    {title}
                </p>
                <p className="mg-7">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                    porttitor accumsan tincidunt.
                </p>
            </div>
            <img src={title} alt={title} />
        </motion.div>   
    )
}

const Projects = () => {

  return (
    <section id="projects" className="py-48">
        <motion.div 
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 } 
        }}>
        <div >
            <p className="font-playfair font-semibold text-4xl">
               <span className="text-red">PRO</span>JECTS
            </p>
            <div className="flex justify-center mt-5">
                <LineGradient width="w-1/3" />
            </div>
        </div>

        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
        </motion.div>


        <div className="flex justify-center ">
        <motion.div 
            className="sm:grid sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={container}>
            <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
                BEAUTIFUL USER INTERFACES
            </div>
            <Project title={project1} />
            <Project title={project2} />
            
            <Project title={project3} />
            <Project title={project4} />
            <Project title={project5} />

            <Project title={project6} />
            <Project title={project7}/>

            <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
                SMOOTH USER EXPERIENCE
            </div>
        </motion.div>
        </div>
    </section>
  )
}

export default Projects