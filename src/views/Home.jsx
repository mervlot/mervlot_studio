/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import SidebarR from "../components/SidebarR"
import Gala from "../components/flowbite/Gala"
import GalaCat from "../components/GalaCat"
import { motion } from 'motion/react';
function MainHome() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setpage] = useState(1)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `http://192.168.56.1:3000/search?page=${page}  `;
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch");
                let info = await response.json();
                let result = info.results
                setContent(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Optional cleanup if you use AbortController 
        };
    }, [page, ]);
    return (
        <div className="dark:bg-black select-none top-0 bg-gray-50 dark:text-gray-50 text-black overflow-hidden">
            <Sidebar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full  pt-10 px-4 sm:px-6 md:px-20 lg:ps-50">
                <Navbar />
                <Footer />

                <div className="mt-10">
                    <GalaCat data={content} loading={loading} error={error} />
                </div>

            </motion.div>
        </div>
    );
}

export default MainHome; 
