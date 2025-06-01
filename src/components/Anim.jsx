/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "motion/react"

function Anim() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                margin: "50px 0",
                padding: "2rem",
                background: "#ffffff",
                borderRadius: "8px",
                textAlign: "center",
            }}
        >
            <h2>apearing on scroll</h2>
        </motion.div>

    )
}

export default Anim