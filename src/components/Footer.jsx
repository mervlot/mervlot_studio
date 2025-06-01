import "../assets/icons/style.css";
import { NavLink } from "react-router-dom"
import { motion } from "motion/react";
export default function Footer() {
  return (
    <motion.nav
      className="
        md:hidden
        fixed 
        bottom-0
        left-1/2
        transform -translate-x-1/2
        w-auto
        bg-white
        dark:bg-black
        backdrop-blur-md
        border
        dark:text-white
         border-t-gray-50/10
        border-b-transparent
         border-l-gray-50/10
         border-r-gray-50/10
        rounded-t-xl
        px-4
        py-2
        flex
        justify-between
        items-center
        shadow-md-top
        z-50
        list-none
          // Adjust the spacing between icons
      "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <li className=" logo-m hover:text-[#2e89ec]!" >
        <NavLink
          className={({ isActive }) => (isActive ? " px-2 cursor-pointer  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : ' px-2 cursor-pointer hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')}
          to="/home" >
          < i className="bi-house " />
         

        </NavLink>
      </li>

      <li className=" logo-m hover:text-[#2e89ec]!" >
        <NavLink
          className={({ isActive }) => (isActive ? " px-2 cursor-pointer  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : ' px-2 cursor-pointer hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')}
          to="/creators" >
          < i className="bi-brush " />



        </NavLink>
      </li>
      <li className=" logo-m hover:text-[#2e89ec]!" >
        <NavLink
          className={({ isActive }) => (isActive ? " px-2 cursor-pointer  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : ' px-2 cursor-pointer hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')}
          to="/projects" >
          < i className="bi-folder2-open" />



        </NavLink>
      </li>
      <li className=" logo-m hover:text-[#2e89ec]!" >
        <NavLink
          className={({ isActive }) => (isActive ? " px-2 cursor-pointer  dark:text-[#2e89ec]  text-[#2e89ec] focus:outline-hidden  " : ' px-2 cursor-pointer hover:text-[#2e89ec]   rounded-lg  dark:text-white  text-black/70 focus:outline-hidden')}
          to="/resources" >
          < i className="bi-lightbulb " />


        </NavLink>
      </li>
    </motion.nav>
  );
}
