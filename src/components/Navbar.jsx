/* eslint-disable no-unused-vars */
import "../assets/icons/style.css"
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      className="
  
   
   justify-center
    justify-items-center
    w-[90%]
    bg-white/20
    dark:bg-black/30 
    backdrop-blur-md 
    border
    border-white/10
    rounded-xl
    px-4
    py-2

   justify-self-center
    
   
    shadow-lg
    z-50
    "
      initial={{ opacity: 0, y: -10}}
      animate={{ opacity: 1, y: 1}}
      transition={{ duration: 1 }}>
      <h2 className="logo-m text-[#2e89ec] ">
        Mervlot Studio
      </h2>
     
  </motion.nav>
  )
}
