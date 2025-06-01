import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from 'react';
import Aid from './Aid.jsx';

const Button = lazy(() => import('./components/Button.jsx'));
const Home = lazy(() => import("./Home.jsx"));
const MainHome = lazy(() => import("./views/Home.jsx"));
const Card = lazy(() => import("./views/Theme.jsx"));
const Creators = lazy(() => import("./views/Creators.jsx"));
const Projects = lazy(() => import("./views/Projects.jsx"));
const Resources = lazy(() => import("./views/Resources.jsx"));
const Categories = lazy(() => import("./views/Categories.jsx"));
const _404 = lazy(() => import("./views/_404.jsx"));

function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  const html = document.documentElement;

  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

function App() {
  useEffect(() => {
    setInitialTheme();
  }, []);

  return (
    <Router>
      <Aid />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<MainHome />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/theme" element={<Card />} />
          <Route path="/test" element={<Button />} />
          <Route path="/categories/:data" element={<Categories />} />
          <Route path="/old-home" element={<Navigate to="/" />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
