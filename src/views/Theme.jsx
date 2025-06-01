import React from 'react';
import { useTheme } from '../components/Theme'; // path to your hook

const Card = () => {
  const [theme, toggleTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-black bg-white">
      <div className="w-72 h-72 rounded-[40px] shadow-lg dark:shadow-sm dark:text dark:shadow-amber-50 flex flex-col relative overflow-hidden bg-inherit text-inherit">
        {/* Menu / Status Bar */}
        <div className="flex justify-between items-center text-sm opacity-40 dark:text-gray-300 text-gray-500 px-6 py-3">
          <div>{dark ? '🌙' : '☀️' } 4:20</div>
          <div className="flex mt-2">
            <div className={`w-2.5 h-1.5 ${dark ? 'bg-white' : 'bg-black'} mr-2`} />
            <div
              className={`w-0 h-0 border-l-[6.8px] border-r-[6.8px] border-b-[7.2px] ${dark ? 'border-transparent border-b-white' : 'border-transparent border-b-black'
                } rotate-[135deg]`}
            />
          </div>
        </div>

        {/* Circle and Toggle */}
        <div className="flex flex-col items-center justify-center transform translate-y-[5%] w-3/4 mx-auto text-center">
          <div
            className={`relative rounded-full w-32 h-32 ${dark
                ? 'bg-gradient-to-br from-indigo-400 to-sky-300'
                : 'bg-gradient-to-br from-pink-500 to-orange-400'
              }`}
          >
            <div
              className={`absolute top-0 right-0 rounded-full w-24 h-24 transition-transform origin-top-right ${dark ? 'scale-100 bg-black' : 'scale-0'
                }`}
            />
          </div>

          {/* Toggle Switch */}
          <label
            htmlFor="switch"
            className="relative w-full mt-7 mb-16 cursor-pointer bg-black/10 dark:bg-white/10 rounded-full h-11"
            onClick={toggleTheme}
          >
            <div
              className={`absolute top-0 left-0 w-1/2 h-full rounded-full shadow-lg transition-transform ${dark ? 'translate-x-full bg-[#2c2929]' : 'bg-white'
                }`}
            />
            <div className="flex justify-between text-xs font-bold w-2/3 mx-auto py-3 select-none">
              <p className={`${dark ? 'text-white' : 'text-black'}`}>Light</p>
              <p className={`${dark ? 'text-white' : 'text-black opacity-50'}`}>Dark</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
