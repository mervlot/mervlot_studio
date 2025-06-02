/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useState, useEffect } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const Card = lazy(() => import("./components/Card"));
const Footer = lazy(() => import("./components/Footer"));
import { motion } from "motion/react"
import "./assets/bootstrap-icons-1.11.3/font/bootstrap-icons.css"


const HeroSection = lazy(() => import("./components/Hero"))
const Waves = lazy(() => import("./components/Wave"));
const Line = lazy(() => import("./components/line"));
const LBanner = lazy(() => import("./components/LBanner"));
const RBanner = lazy(() => import("./components/RBanner"));
import InfiniteScroll from './components/InfiniteScroll';







function Home() {
  const [dark, setDark] = useState(false)
  const html = document.documentElement;
  const theme = html.getAttribute('data-theme')

  useEffect(() => {

    if (theme == "dark") {
      setDark(true)
    }
  
  }, [theme])
  


  const items = [
    { content: "Text Item 1" },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];

  return (
    
    <div className=" w-full dark:bg-black bg-gray-50 overflow-x-hidden">
    
        
        <HeroSection />

        {/* <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        /> */}
      
        <Suspense>
          <Waves
          lineColor="#0cc5f3"
            backgroundColor="#000"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </Suspense>
       
      {/* 
      /* <motion.div
          className="absolute w-[10rem] h-[10rem] bg-purple-800 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.5, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-10rem", left: "-10rem" }}
        /> */}





      <Line />

      <LBanner />
      <RBanner />

      <div className="justify-self-center w-full" style={{ height: '500px', width: '20hv' }}>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection='left'
          autoplay={true}
          autoplaySpeed={1}
          autoplayDirection="down"
          pauseOnHover={false}
        />
      </div>

      <Footer />
      {console.log(dark)}

    </div>
  );
}


// import Spline from '@splinetool/react-spline';

//  const App =() => {
//   return (
//     <Spline scene="https://prod.spline.design/86Rn-8JXY23DcKtd/scene.splinecode" />
//   );
// }

export default Home;
