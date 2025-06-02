/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { motion } from 'motion/react';
const categories = [
    {
        name: "Muhammmad",
        desc: "the founder of mervlotStudio",
        src: "/mervlot_studio/img/Alert.jpeg",
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
                    {categories.map((cat, idx) => (


                        <div key={idx} className="bg-white dark:bg-dark-100 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
                            <div className="relative h-40">
                                <img
                                    className="absolute h-full w-full object-cover" draggable={false}
                                    src="https://images.unsplash.c`om/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                />
                            </div>

                            <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                                <img
                                    className="object-cover w-full h-full"
                                    draggable={false}
                                    src={cat.src}
                                />
                            </div>
                            <div className="mt-16">
                                <h1 className="text-lg text-center font-semibold">{cat.name}</h1>
                                <p className="text-sm text-gray-600 text-center">
                                    13 connections in common
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



