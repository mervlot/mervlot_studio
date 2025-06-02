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
    const [searchTerm, setSearchTerm] = useState("")
    const [btnSearch, setBtnSearch] = useState(true)
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [empty, setEmpty] = useState(false)
    const [page, setpage] = useState(1)
    const [category, setCategory] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `http://192.168.56.1:3000/search?page=${page}&q=${searchTerm}&category=${category}  `;
                console.log(url)
                setEmpty(false)
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch");
                let info = await response.json();
                let result = info.results
                setContent(result);
                if (result == false)  setEmpty(true) 
              
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
    }, [page, btnSearch]);
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
                <div className="">
                    <div className="rounded-xl border mt-9 border-blue-500 pl-2 ">
                        <button className="bi-search cursor-pointer" onClick={() => setBtnSearch(!btnSearch)} />
                        <input
                            className="pl-3 w-[95%]"
                            type="text"
                            placeholder="Search through thousands of movies"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className="mt-10">
                    <GalaCat data={content} loading={loading} error={error} empty={empty} />
                </div>

            </motion.div>
        </div>
    );
}

export default MainHome; 
