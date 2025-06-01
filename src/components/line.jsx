/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "motion/react"

function Line() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <>
            <motion.hr className="border-0 h-1 bg-gradient-to-r mx-5 justify-self-center from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg "
                ref={ref}
                initial={{ opacity: 0, width: 0 }}
                animate={isInView ? { opacity: 1, width: "60%" } : {}}
                    transition={{ duration: 1.6, ease: "easeInOut" }}></motion.hr>
      
    
</>
    )
}

export default Line