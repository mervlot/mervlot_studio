import "../assets/icons/style.css";
import { NavLink } from "react-router-dom"

// eslint-disable-next-line no-unused-vars 
import { motion } from "motion/react";
export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      id="hs-application-sidebar " className="justify-items-center 

    w-44.7 h-full my-5
    mb-5
    
  
    rounded-4xl
    hidden 
    dark:text-white 
    text-black 
    fixed inset-y-0 start-0 z-60 
    bg-white/20 
      dark:bg-black/30  
      md:block
    lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 
     " role="dialog" tabIndex="-1" aria-label="Sidebar">
      <div className="relative flex flex-col h-full max-h-full">
        <div className="px-8 pt-4">
          {/* Logo */}
          <a className="flex-none rounded-xl text-md text-center justify-self-center inline-block font-semibold focus:outline-hidden focus:opacity-80" href="/" aria-label="Preline">
            <h2 className="logo-m text-[#2e89ec] md:hidden md:text-xs lg:block ">
              Mervlot Studio
            </h2>
          </a>
          {/* End Logo */}
        </div>

        {/* Content */}
        <div className="h-screen dark:text-white   text-black  overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <nav className="hs-accordion-group p-3 md:p-1 w-full md:w-1! flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="flex flex-col   space-y-1 logo-m justify-center h-full px-[10%] ">
              <li className=" logo-m hover:text-[#2e89ec]!" >
                <NavLink
                  className={({ isActive }) => (isActive ? "flex  items-center gap-x-3.5 md:px-1 px-2.5 py-[5vh] text-md md:text-xs  rounded-lg  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : 'flex items-center gap-x-3.5 px-2.5 md:px-1 py-[5vh] text-md hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')}
                  to="/home" >
                  < i className="bi-house md:text-xs" />
                  <span className="md:hidden md:text-xs lg:block">Home</span>

                </NavLink>
              </li>



              <li className=" logo-m hover:text-[#2e89ec]!">
                <NavLink className={({ isActive }) => (isActive ? "flex items-center gap-x-3.5 px-2.5 py-[5vh] text-md md:text-xs rounded-lg  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : 'flex items-center gap-x-3.5 px-2.5 py-[5vh] text-md hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')} to="/creators" >
                  < i className="bi-brush md:text-xs" />
                  <span className="md:hidden md:text-xs lg:block">Creators</span>

                </NavLink>
              </li>
              <li className=" logo-m hover:text-[#2e89ec]!">
                <NavLink className={({ isActive }) => (isActive ? "flex items-center gap-x-3.5 px-2.5 py-[5vh] text-md md:text-xs rounded-lg  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : 'flex items-center gap-x-3.5 px-2.5 py-[5vh] text-md hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')} to="/projects" >
                  < i className="bi-folder2-open md:text-xs" />
                  <span className="md:hidden md:text-xs lg:block">Projects</span>

                </NavLink>
              </li>

              <li className=" logo-m hover:text-[#2e89ec]!" >
                <NavLink className={({ isActive }) => (isActive ? "flex items-center gap-x-3.5 px-2.5 py-[5vh] text-md md:text-xs rounded-lg  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : 'flex items-center gap-x-3.5 px-2.5 py-[5vh] text-md hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')} to="/resources" >
                  < i className="bi-lightbulb md:text-xs" />
                  <span className="md:hidden md:text-xs lg:block ">Resources</span>

                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* End Content */}
      </div>
    </motion.div>

  );
}




