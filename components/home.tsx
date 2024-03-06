import Image from "next/image";
import { BsDashLg } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";

const Home = () => {
    return (
        <div className="flex flex-col w-full h-full md:flex-row items-center justify-center overflow-auto">
            <div className="md:bg-[#ffb400] h-[0px] w-[0px] md:h-[200%] md:w-[100%] left-[-83%] top-[-50%] fixed rotate-[-15deg]"></div>
            <div className="z-10 md:h-full mt-8 md:mt-0 md:p-8">
                <div className="bg-black"></div>
                <Image src="/pic.jpg" alt="" width="200" height="300" className="w-[200px] h-[200px] object-scale-down md:object-cover md:min-w-[300px] md:w-[1100px] md:h-[900px] ml-8 md:rounded-3xl rounded-full border-4 border-[#292929] md:border-none bg-black" />
            </div>
            <div className="my-[40px] w-full md:ml-[170px] text-[25px] md:text-[42px] font-semibold flex flex-col items-center dark:text-white text-[#666666]">
                <span className="text-[#ffb400]">I'M ANURAG AGARWAL.</span>
                WEB DEVELOPER
                <div className="ml-8 text-star text-[15px] max-w-[600px] md:text-[18px] font-normal m-2 leading-8 md:leading-10">
                    I am software & full-stack web developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                </div>

                <button className="mt-[20px] flex items-center justify-between w-[230px] pl-6 h-[50px] md:mt-4 text-[15px] text-gray-600 dark:text-white rounded-full transition duration-500 ease-out md:hover:bg-[#ffb400] border-2 border-[#ffb400]">
                    MORE ABOUT ME
                    <IoMdArrowRoundForward size={20} className="text-white h-[50px] w-[50px] bg-[#ffb400] rounded-full" />
                </button>
            </div>
        </div>
    );
}

export default Home;