import Image from "next/image";
import { BsDashLg } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";

const Home = () => {
    return (
        <div className="flex flex-col w-full h-full md:flex-row items-center justify-center">
            <div className="md:bg-[#ffb400] h-[2px] md:h-[200%] w-[100%] left-[-83%] top-[-50%] fixed rotate-[-15deg]"></div>
            <div className="z-10 md:h-full md:p-8">
                <div className="bg-black rounded-3xl"></div>
                <Image src="/pic.jpg" alt="" width="200" height="200" className="object-cover md:min-w-[300px] md:w-[1100px] md:h-[900px] ml-8 md:rounded-3xl rounded-full border-4 border-[#292929] md:border-none" />
            </div>
            <div className="w-full md:ml-[170px] text-[25px] md:text-[42px] font-semibold flex flex-col items-center pb-20">

                <div className="flex flex-col md:flex-row gap-x-6"><BsDashLg size={45} className="opacity-0 md:opacity-100 mt-2 text-[#ffb400]" /><span className="text-[#ffb400]">I'M ANURAG AGARWAL.</span><br /></div>

                <span className="text-[#666666] dark:text-white">WEB DEVELOPER
                </span>
                <br />
                <div className="ml-6 text-start dark:text-white text-gray-600 text-[15px] max-w-[600px] md:text-[18px] font-normal m-2 leading-8 md:leading-10">
                    I am software & full-stack web developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                </div>

                <button className="flex items-center justify-between w-[230px] pl-6 h-[50px] md:mt-4 text-[15px] text-gray-600 dark:text-white rounded-full transition duration-500 ease-out hover:bg-[#ffb400] border-2 border-[#ffb400]">
                    MORE ABOUT ME
                    <IoMdArrowRoundForward size={20} className="text-white h-[50px] w-[50px] bg-[#ffb400] rounded-full" />
                </button>
            </div>
        </div>
    );
}

export default Home;