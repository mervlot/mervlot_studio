import "../assets/icons/style.css";
// eslint-disable-next-line no-unused-vars 
import { motion } from "motion/react";
export default function SidebarR() {
  return (
    <div id="hs-application-sidebar" className="hs-overlay [--auto-close:lg] 
    hs-overlay-open:translate-x-0 
    -translate-x-full transition-all duration-300 transform 
    w-65 h-full 
    hidden 
    dark:text-white 
    text-black 
    fixed inset-y-0 end-0 z-60  
    bg-white/20 
      dark:bg-black/30  
    lg:block lg:translate-x-0 lg:start-auto lg:bottom-0 
     dark:border-neutral-700" role="dialog" tabIndex="-1" aria-label="Sidebar">
      <div className="relative flex flex-col h-full max-h-full">
        <div className="px-8 pt-4">
          {/* Logo */}
          <a className="flex-none rounded-xl text-xl text-center justify-self-center inline-block font-semibold focus:outline-hidden focus:opacity-80" href="#" aria-label="Preline">
            <h2 className="logo-m text-[#2e89ec]  ">
              Mervlot Studio
            </h2>
          </a>
          {/* End Logo */}
        </div>

        {/* Content */}
        <div className="h-full dark:text-white 
    text-black  overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="flex flex-col space-y-1 ">
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-white/10 text-sm dark:text-white text-black/70  rounded-lg hover:bg-white/10 focus:outline-hidden focus:bg-white/10 dark:bg-neutral-700 " href="#">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  Dashboard
                </a>
              </li>



              <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-black/70 rounded-lg hover:bg-white/10 dark:hover:bg-neutral-700 dark:text-white" href="#">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                Calendar
              </a></li>
              <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm dark:text-white text-black/70 rounded-lg hover:bg-white/10 dark:hover:bg-neutral-700" href="#">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                Documentation
              </a></li>
            </ul>
          </nav>
        </div>
        {/* End Content */}
      </div>
    </div>

  );
}