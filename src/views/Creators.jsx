/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { motion } from 'motion/react';
import "../assets/bootstrap-icons-1.11.3/font/bootstrap-icons.css"

const creators = [
    {
        name: "Muhammmad",
        desc: "the founder of mervlotStudio",
        src: "/mervlot_studio/img/mervlot.png",
    },
];


function Creators() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setpage] = useState(1)


    return (
        <div className="dark:bg-black! select-none top-0 bg-gray-50! dark:text-gray-50! text-black overflow-hidden">
            <Sidebar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="  w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-50">
                <Navbar />
                <Footer />
                <div className="w-[40%] h-screen justify-self-center px-4 py-4 mb-5">
                    {creators.map((cat, idx) => (


                        <div key={idx} className="bg-white dark:bg-dark-100 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
                            <div className="relative  h-40">
                                <div
                                    className="absolute h-full  outline-none  border-2 border-gray-50 dark:border-gray-100 dark:mx-1 w-full  dark:my-1 dark:w-[98%] dark:rounded-t-lg object-cover" draggable={false}
                                   
                                />
                            </div>

                            <div className="relative shadow mx-auto h-24 w-24 -my-12 bg-inherit border-white rounded-full overflow-hidden border-4">
                                <img
                                    className="justify-self-center  w-full px-3 py-3 h-full"
                                    draggable={false}
                                    src={cat.src}
                                />
                            </div>
                            <div className="mt-16">
                                <h1 className="text-lg text-center font-semibold">{cat.name}</h1>
                                <p className="text-sm text-gray-600 text-center">
                                    Let Code Together As One
                                </p>
                            </div>

                        </div>




                    ))}
                </div>


            </motion.div>
        </div>
    );
}

export default Creators;



