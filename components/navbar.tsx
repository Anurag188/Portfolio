"use client";


import React, { useState, useEffect } from 'react';
import { Moon } from 'lucide-react'
import { IoHomeSharp, IoSunny } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { TabsList, TabsTrigger } from "@/components/ui/tabs"




const NavBar = () => {
  const [dark, setDark] = useState('light');

  const toggleTheme = () => {
    const window = document.documentElement;
    if (dark === 'dark') {
      window.classList.remove('dark');
      setDark('light');
      localStorage.setItem('theme', 'light');
    } else {
      window.classList.add('dark');
      setDark('dark');
      localStorage.setItem('theme', 'dark');
    }
  };


  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setDark(theme);
      const window = document.documentElement;
      window.classList.toggle('dark', theme === 'dark');
    }
  }, []);

  return (

    <>
      <TabsList className="rounded-none mt-auto md:w-[100px] h-[75px] md:ml-auto md:h-full flex md:flex-col md:justify-start bg-white dark:bg-[#292929] md:bg-inherit md:dark:bg-inherit gap-y-5 gap-x-6 md:items-end p-10">

        <div onClick={toggleTheme} className='bg-[#e9ecef] h-[50px] p-3 cursor-pointer rounded-full dark:bg-[#4b4b4b]'>
          {dark === 'dark' ? <IoSunny size="26" className='text-white' /> : <Moon className='text-gray-500' />}
        </div>

        <TabsTrigger value="home" className="group dark:text-white h-[50px] w-[50px] bg-[#e9ecef] dark:bg-[#414141] md:mt-[160px] md:hover:w-[130px] hover:bg-[#ffb400] hover:dark:bg-[#ffb400] hover:text-white rounded-full data-[state=active]:dark:bg-[#ffb400] data-[state=active]:bg-[#ffb400] data-[state=active]:text-white md:justify-end">
          <h1 className="transition-opacity opacity-0 md:group-hover:opacity-100 text-[20px] mr-10 font-medium">Home</h1>
          <IoHomeSharp size={22} className="absolute" />
        </TabsTrigger>

        <TabsTrigger value="skills" className="group dark:text-white h-[50px] w-[50px] bg-[#e9ecef] dark:bg-[#414141] md:hover:w-[130px] hover:bg-[#ffb400] hover:dark:bg-[#ffb400] hover:text-white rounded-full data-[state=active]:dark:bg-[#ffb400] data-[state=active]:bg-[#ffb400] data-[state=active]:text-white md:justify-end">
          <h1 className="transition-opacity opacity-0 md:group-hover:opacity-100 text-[20px] mr-10 font-medium">Skills</h1>
          <FaUser size={22} className="absolute" />
        </TabsTrigger>

        <TabsTrigger value="portfolio" className="group dark:text-white h-[50px] w-[50px] bg-[#e9ecef] dark:bg-[#414141] md:hover:w-[160px] hover:bg-[#ffb400] hover:dark:bg-[#ffb400] hover:text-white rounded-full data-[state=active]:dark:bg-[#ffb400] data-[state=active]:bg-[#ffb400] data-[state=active]:text-white md:justify-end">
          <h1 className="transition-opacity opacity-0 md:group-hover:opacity-100 text-[20px] mr-10 font-medium">Portfolio</h1>
          <FaBriefcase size={22} className="absolute" />
        </TabsTrigger>

        <TabsTrigger value="contact" className="group dark:text-white h-[50px] w-[50px] bg-[#e9ecef] dark:bg-[#414141] md:hover:w-[150px] hover:bg-[#ffb400] hover:dark:bg-[#ffb400] hover:text-white rounded-full data-[state=active]:dark:bg-[#ffb400] data-[state=active]:bg-[#ffb400] data-[state=active]:text-white md:justify-end">
          <h1 className="transition-opacity opacity-0 md:group-hover:opacity-100 text-[20px] mr-10 font-medium">Contact</h1>
          <FaComments size={22} className="absolute" />
        </TabsTrigger>

      </TabsList>
    </>
  );
};

export default NavBar;

