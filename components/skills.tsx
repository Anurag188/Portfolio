import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';


const frontend = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACTJS', 'NEXTJS', 'TAILWIND'];
const backend = ['NODE JS', 'EXPRESS', 'REST API', 'NEXT AUTH', 'REDUX'];
const database = ['MONGODB', 'MY SQL', 'GRAPHQL'];
const devops = ['GIT', 'DOCKER'];


const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(inView);
    }, [inView]);

    const renderList = (techStack: string[]) => (
        <ul className='grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-x-8 gap-y-4 ml-4'>
            <AnimatePresence initial={false}>
                {isVisible &&
                    techStack.map((tech, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`text-[18px] h-[40px] pt-2 w-32 border-2 text-sm text-center rounded-lg bg-black/5 dark:bg-white/5 dark:text-white/80 text-slate-700 ${index % 2 === 0 ? 'border-[#ffb400]' : 'border-[#666666] dark:border-white'}`}

                        >
                            {tech}
                        </motion.li>
                    ))}
            </AnimatePresence>
        </ul>
    );

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex pt-2 md:pl-[250px] h-[150px] md:h-[200px] justify-center items-center md:w-[calc(100vw-300px)] font-semibold ">
                <h1 className="text-[35px] md:text-[56px] absolute z-10 md:pt-1 pl-2 text-[#666666] dark:text-white">SKILL <span className="text-[#ffb400]">SET</span></h1>
                <span className="text-[55px] md:text-[95px] text-[#4b4b4b] opacity-10 dark:opacity-40">EXPERTISE</span>
            </div>

            <div ref={ref} className='flex flex-col md:ml-[100px] gap-20 py-8 md:pt-[100px] items-center h-full text-[#666666] dark:text-white overflow-auto '>
                <div className='flex flex-wrap md:items-center text-[24px] gap-8'>
                    <h1 className='w-30 font-bold'>FRONTEND : </h1>
                    {renderList(frontend)}
                </div>
                <div className='flex flex-wrap md:items-center text-[24px] gap-x-8'>
                    <h1 className='w-30 font-bold'>BACKEND :</h1>
                    {renderList(backend)}
                </div>
                <div className='flex flex-wrap md:items-center text-[24px] gap-x-8'>
                    <h1 className='w-30 font-bold'>DATABASE :</h1>
                    {renderList(database)}
                </div>
                <div className='flex flex-wrap md:items-center text-[24px] gap-x-8'>
                    <h1 className='w-30 font-bold'>DEVOPS :</h1>
                    {renderList(devops)}
                </div>
            </div>
        </div>

    );
};

export default Skills;
