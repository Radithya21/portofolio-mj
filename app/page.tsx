'use client';

import { useState, useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Footer from "./components/footer";
import SplashScreen from "./components/SplashScreen";


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash has been shown before
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div>
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}
