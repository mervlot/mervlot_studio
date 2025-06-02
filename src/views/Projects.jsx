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


function Projects() {
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

                </div>


            </motion.div>
        </div>
    );
}

export default Projects;



