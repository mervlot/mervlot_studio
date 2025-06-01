/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "motion/react"
const LBanner = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <>
            <section
                
                className="">
                <div className="mx-auto w-screen max-w-screen-xl px-2 py-8 sm:px-3 sm:py-6 lg:px-4 lg:py-16">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}    className="max-w-prose">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                            Understand user flow and
                            <strong className="text-indigo-600"> increase </strong>
                            conversions
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                            accusamus impedit minima harum corporis iusto.
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default LBanner




// import React from "react";