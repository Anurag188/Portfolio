"use client"

import Home from "@/components/home"
import Skills from "@/components/skills";
import { Tabs, TabsContent } from "@/components/ui/tabs"

import NavBar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";


export default function App() {


  return (
    <div className="w-full h-full">
      <Tabs defaultValue="home" className="flex flex-col md:flex-row h-full w-full">
        <TabsContent value="home" className="w-full overflow-auto"><Home /></TabsContent>
        <TabsContent value="skills" className="overflow-auto"><Skills /></TabsContent>
        <TabsContent value="portfolio" className="overflow-x-hidden overflow-y-auto"><Portfolio/></TabsContent>
        <TabsContent value="contact" className="overflow-auto"><Contact/></TabsContent>

        <NavBar />

      </Tabs>

    </div>



  );
}
