import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { FiFileText } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi"
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div className="w-full h-full flex flex-col mb-[40px] md:mb-0 overflow-auto">
            <div className="flex pt-2 md:pt-2 md:pl-[250px] h-[100px] md:h-[150px] justify-center items-center md:w-[calc(100vw-300px)] font-semibold">
                <h1 className="text-[35px] md:text-[50px] absolute z-10 md:pt-1 pl-2 text-[#666666] dark:text-white">MY <span className="text-[#ffb400]">PORTFOLIO</span></h1>
                <span className="text-[70px] md:text-[110px] text-[#4b4b4b] opacity-10 dark:opacity-40">WORKS</span>
            </div>

            <div className="flex flex-col gap-y-10 m-y-12 md:gap-y-0 md:pl-[160px] md:w-[calc(100vw-300px)] my-[20px] md:my-0 overflow-auto text-[#ffb400] ">
                <div className='flex flex-wrap gap-x-20 gap-y-10  md:h-[400px] items-center justify-center'>

                    <Dialog>
                        <DialogTrigger>
                            <button className="w-[300px] h-[300px]  md:w-[350px] md:h-[350px] rounded-lg bg-[url('../public/chatapp.jpg')] bg-contain bg-no-repeat  hover:bg-[#ffb400]">
                                <div className="w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg font-semibold flex items-center justify-center text-[28px] pb-[40px] bg-transparent hover:bg-opacity-50 backdrop-blur-lg">Chat Application</div>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="flex flex-col max-w-[700px] items-center justify-center  bg-white dark:bg-[#222]">
                            <DialogHeader className="text-[33px] text-[#ffb400] font-semibold">CHAT APPLICATION</DialogHeader>
                            <div className="flex w-full flex-col flex-wrap justify-between gap-5">
                                <div className="flex gap-x-2 items-center"><FiFileText className="" /> Project: Chat App</div>

                                <div className="flex gap-x-2 items-center"><FaCode className="" />TechStack: Nextjs, Tailwind, MongoDb</div>

                                <div className="flex gap-x-2 items-center"><FaGithub className="" size={20} />Github: <a href="http://github.com/Anurag188/Chat-App-Next.js" className="text-[#ffb400] underline" >github.com/Anurag188/Chat-App-Next.js</a> </div>

                                <div className="flex gap-x-2 items-center"><HiExternalLink className="" size={20} /> Production: <a href="https://chat-app-89uf.onrender.com/" className="text-[#ffb400] underline" >chat-app-89uf.onrender.com</a></div>

                            </div>
                            <div className="w-[300px] h-[300px]  md:w-[450px] md:h-[450px] rounded-lg bg-[url('../public/chatapp.jpg')] bg-contain bg-no-repeat"></div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger>
                            <button className="w-[300px] h-[300px]  md:w-[350px] md:h-[350px] rounded-lg bg-[url('../public/discord.jpg')] bg-contain bg-no-repeat  hover:bg-[#ffb400]">
                                <div className="w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg font-semibold flex items-center justify-center text-[28px] pb-[40px] bg-transparent hover:bg-opacity-50 backdrop-blur-lg">Discord Clone</div>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="flex flex-col max-w-[700px] items-center justify-center bg-white dark:bg-[#222]">
                            <DialogHeader className="text-[33px] text-[#ffb400] font-semibold">DISCORD CLONE</DialogHeader>
                            <div className="flex w-full flex-col flex-wrap justify-between gap-5">
                                <div className="flex gap-x-2 items-center"><FiFileText className="" /> Project: Discord Clone App</div>

                                <div className="flex gap-x-2 items-center"><FaCode className="" />TechStack: Nextjs, Tailwind, MYSQL, Zustand</div>

                                <div className="flex gap-x-2 items-center"><FaGithub className="" size={20} />Github: <a href="http://github.com/Anurag188/Chat-App-Next.js" className="text-[#ffb400] underline" >github.com/Anurag188/Chat-App-Next.js</a> </div>

                                <div className="flex gap-x-2 items-center"><HiExternalLink className="" size={20} /> Production: <a href="https://chat-app-89uf.onrender.com/" className="text-[#ffb400] underline" >chat-app-89uf.onrender.com</a></div>

                            </div>
                            <div className="w-[300px] h-[300px]  md:w-[450px] md:h-[450px] rounded-lg bg-[url('../public/discord.jpg')] bg-contain bg-no-repeat"></div>
                        </DialogContent>
                    </Dialog>

                </div>
                <div className='flex flex-wrap gap-x-20 gap-y-10 md:h-[400px] items-center justify-center'>

                    <Dialog>
                        <DialogTrigger>
                            <button className="w-[300px] h-[300px]  md:w-[350px] md:h-[350px] rounded-lg bg-[url('../public/e-commerce.jpg')] bg-contain bg-no-repeat  hover:bg-[#ffb400]">
                                <div className="w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg font-semibold flex items-center justify-center text-[28px] pb-[40px] bg-transparent hover:bg-opacity-50 backdrop-blur-lg">E-Commerce<br/> Website</div>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="flex flex-col max-w-[700px] items-center justify-center bg-white dark:bg-[#222]">
                            <DialogHeader className="text-[33px] text-[#ffb400] font-semibold">E-COMMERCE WEBSITE</DialogHeader>
                            <div className="flex w-full flex-col flex-wrap justify-between gap-5">
                                <div className="flex gap-x-2 items-center"><FiFileText className="" /> Project: E-commerce Website</div>

                                <div className="flex gap-x-2 items-center"><FaCode className="" />TechStack: Nextjs, Tailwind, GraphQl, Redux</div>

                                <div className="flex gap-x-2 items-center"><FaGithub className="" size={20} />Github: <a href="http://github.com/Anurag188/Chat-App-Next.js" className="text-[#ffb400] underline" >github.com/Anurag188/Chat-App-Next.js</a> </div>

                                <div className="flex gap-x-2 items-center"><HiExternalLink className="" size={20} /> Production: <a href="https://chat-app-89uf.onrender.com/" className="text-[#ffb400] underline" >chat-app-89uf.onrender.com</a></div>

                            </div>
                            <div className="w-[300px] h-[300px]  md:w-[450px] md:h-[450px] rounded-lg bg-[url('../public/e-commerce.jpg')] bg-contain bg-no-repeat"></div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger>
                            <button className="w-[300px] h-[300px]  md:w-[350px] md:h-[350px] rounded-lg bg-[url('../public/music.jpeg')] bg-contain bg-no-repeat  hover:bg-[#ffb400]">
                                <div className="w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg font-semibold flex items-center justify-center text-[28px] pb-[40px] bg-transparent hover:bg-opacity-50 backdrop-blur-lg">Music Streaming <br/> App</div>
                            </button>
                        </DialogTrigger>
                        <DialogContent className="flex flex-col max-w-[700px] items-center justify-center bg-white dark:bg-[#222]">
                            <DialogHeader className="text-[33px] text-[#ffb400] font-semibold">MUSIC STREAMING APP</DialogHeader>
                            <div className="flex w-full flex-col flex-wrap justify-between gap-5">
                                <div className="flex gap-x-2 items-center"><FiFileText className="" /> Project: Music Streaming App</div>

                                <div className="flex gap-x-2 items-center"><FaCode className="" />Language: Nextjs, Tailwind, MYSQL</div>

                                <div className="flex gap-x-2 items-center"><FaGithub className="" size={20} />Github: <a href="http://github.com/Anurag188/Chat-App-Next.js" className="text-[#ffb400] underline" >github.com/Anurag188/Chat-App-Next.js</a> </div>

                                <div className="flex gap-x-2 items-center"><HiExternalLink className="" size={20} /> Production: <a href="https://chat-app-89uf.onrender.com/" className="text-[#ffb400] underline" >chat-app-89uf.onrender.com</a></div>

                            </div>
                            <div className="w-[300px] h-[300px]  md:w-[450px] md:h-[450px] rounded-lg bg-[url('../public/music.jpeg')] bg-contain bg-no-repeat"></div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               