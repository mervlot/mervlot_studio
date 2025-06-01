/* eslint-disable no-unused-vars */
import { motion } from 'motion/react';
const categories = [
    {
        label: "Alerts",
        src: "/img/Alert.jpeg\
        ",
        href: "/categories/Alerts",
    },
    {
        label: "Modals",
        src: "null",
        href: "/categories/Modals",
    },
    {
        label: "Tooltips",
        src: "null",
        href: "/categories/Tooltips",
    },
    {
        label: "Forms",
        src: "null",
        href: "/categories/Forms",
    },
    {
        label: "Cards",
        src: "null",
        href: "/categories/Cards",
    },
    {
        label: "Buttons",
        src: "null",
        href: "/categories/Buttons",
    }, {
        label: "Heros",
        src: "null",
        href: "/categories/Heros",
    }, {
        label: "Drop downs",
        src: "null",
        href: "/categories/Drop_downs",
    }, {
        label: "Nav bars",
        src: "null",
        href: "/categories/Nav_bars",
    },
];

const Gala = () => {
    return (
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-9 px-4 py-4 mb-5">
            {categories.map((cat, idx) => (
                <motion.a
                    key={idx}
                    href={cat.href}
                    className="group relative block overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}

                >
                    <img
                        src={cat.src}
                        alt={cat.label}
                        className="w-full h-40 object-cover bg-gray-100 dark:bg-neutral-800"

                    />

                    {/* Label Overlay */}
                    <div className="absolute bottom-0 left-0 w-full px-3 py-1.5 bg-black/20 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        {cat.label}
                    </div>

                    {/* Hover View Button */}
                    {/* <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all"> 
                        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"> 
                            <svg 
                                className="shrink-0 size-3" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                            > 
                                <circle cx="11" cy="11" r="8" /> 
                                <path d="M21 21l-4.3-4.3" /> 
                            </svg> 
                            <span className="text-xs">View</span> 
                        </div> 
                    </div> */}
                </motion.a>
            ))}
        </div>
    );
};

export default Gala; 
