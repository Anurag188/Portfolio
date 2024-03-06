import { TcontactSchema, contactSchema } from "@/lib/types";
import { FaMap } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { type FieldValues, useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "./ui/input";
import { RiSendPlaneFill } from "react-icons/ri";


const Contact = () => {

    const { register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<TcontactSchema>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: TcontactSchema) => {
        const response = await fetch('/api/send-mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                subject:data.subject,
                message: data.message
            })
        });

        if (response.ok) {
            toast.success('Email Sent Successfully');
            reset();
        } else {
            const responseData = await response.json();
            if (responseData.errors) {
                const errors = responseData.errors;
                if (errors.name) {
                    setError("name", {
                        type: "server",
                        message: errors.name
                    });
                }
                if (errors.email) {
                    setError('email', {
                        type: 'server',
                        message: errors.email
                    });
                }
                if (errors.message) {
                    setError('message', {
                        type: 'server',
                        message: errors.message
                    });
                }
            } else {
                toast.error("Something went wrong!");
            }
        }
    }



    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex md:pt-2 md:pl-[250px] h-[100px] md:h-[200px] justify-center items-center md:w-[calc(100vw-300px)] font-semibold">
                <h1 className="text-[38px] md:text-[60px] absolute z-10 md:pt-1 pl-2 text-[#666666] dark:text-white">GET IN <span className="text-[#ffb400]">TOUCH</span></h1>
                <span className="text-[70px] md:text-[110px] text-[#4b4b4b] opacity-10 dark:opacity-40">CONTACT</span>
            </div>

            <div className='flex flex-wrap gap-4 items-center justify-center text-[#666666] dark:text-white md:ml-[200px] md:mt-[50px] overflow-auto'>
                <div className="flex flex-col w-[400px] gap-6 m-6">
                    <div className="text-[26px] font-[550]">DON'T BE SHY !</div>
                    <div className="text-[15px]">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</div>
                    <div className="flex gap-x-5 font-thin">
                        <FaMap size={45} color="#ffb400" />
                        <div>ADDRESS POINT <br /> <span className="font-[600] text-[15px]">Hno-45, Rajlok Colony Jwalapur, Haridwar, India 249407</span></div>
                    </div>
                    <div className="flex gap-x-5 font-thin">
                        <FaEnvelopeOpen size={30} color="#ffb400" />
                        <div>MAIL ME<br /> <span className="font-[600] text-[15px]">anuragagarwal@gmail.com</span></div>
                    </div>
                    <div className="flex gap-x-5 font-thin">
                        <FaSquarePhone size={40} color="#ffb400" />
                        <div>CALL ME<br /> <span className="font-[600] text-[15px]">+91 7300632137</span></div>
                    </div>
                </div>

                <div className="flex md:w-[650px] m-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-x-12 gap-y-6">
                        <Input {...register('name')} disabled={isSubmitting} type="text" placeholder="YOUR NAME" className=" focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[300px] h-[48px] border-[1px] focus:border-[#ffb400] rounded-full  dark:bg-[#4b4b4b] dark:bg-opacity-40 pl-6" required />
                        <Input  {...register('email')} disabled={isSubmitting} type="email" placeholder="YOUR EMAIL" className=" focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[300px] h-[48px] border-[1px] focus:border-[#ffb400] rounded-full dark:bg-[#4b4b4b] dark:bg-opacity-40 pl-6" required />
                        <Input  {...register('subject')} disabled={isSubmitting} type="text" placeholder="YOUR SUBJECT" className=" focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[650px] h-[48px] border-[1px] focus:border-[#ffb400] rounded-full dark:bg-[#4b4b4b] dark:bg-opacity-40 pl-6" required />
                        <Input  {...register('message')} disabled={isSubmitting} type="text" placeholder="YOUR MESSAGE" className="focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[650px] h-[200px] border-[1px] focus:border-[#ffb400] rounded-3xl dark:bg-[#4b4b4b] dark:bg-opacity-40 pl-6" required />
                        <button type="submit" disabled={isSubmitting} className="flex items-center justify-between w-[230px] pl-6 h-[50px] font-[600] md:mt-4 text-[15px] dark:text-white rounded-full transition duration-500 ease-out hover:bg-[#ffb400] border-2 border-[#ffb400]">
                            SEND MESSAGE
                            <div className="text-white h-[50px] w-[50px] bg-[#ffb400] flex items-center justify-center rounded-full"><RiSendPlaneFill size={28} /></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;