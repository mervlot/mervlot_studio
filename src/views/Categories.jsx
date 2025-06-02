/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import "../assets/bootstrap-icons-1.11.3/font/bootstrap-icons.css"

// Lazy-loaded components 
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const GalaCat = lazy(() => import("../components/GalaCat"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const SidebarR = lazy(() => import("../components/SidebarR"));
const Line = lazy(() => import("../components/line"));

const Categories = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setpage] = useState(1)

    const { data } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `http://localhost:3000/search?category=${data}&page=${page}`;
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
    }, [data, page]);




    return (
        <div className="dark:bg-black select-none  bg-gray-50 dark:text-gray-50 text-black">
            <Suspense fallback={null}><Sidebar /></Suspense>
            <Suspense fallback={null}><SidebarR /></Suspense>

            <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 lg:pe-72 ">
                <Suspense fallback={null}><Navbar /></Suspense>

                <motion.div
                    className="flex flex-col items-center logo-m justify-center h-[10vh] my-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl font-bold mb-4 text-gradient"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {data}
                    </motion.h1>
                    <Suspense fallback={null}><Line /></Suspense>
                </motion.div>

                <Suspense fallback={null}><GalaCat data={content} loading={loading} error={error} /></Suspense>
                <Suspense fallback={null}><Footer /></Suspense>
            </div>
        </div>
    );
};

export default Categories; 
