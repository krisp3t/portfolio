import React, {useEffect, useState, useCallback} from 'react';
import Particles from "react-particles";
import {loadFull} from "tsparticles";

import './App.css';
import Nav from './components/Nav'
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import particlesOptions from "./particles/particlesOptions.js";

export default function App() {
    const [offset, setOffset] = useState(0);
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <div className="relative min-h-screen">
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions}/>
            <div
                className="w-full"
                id="main">
                <Nav blur={offset > 0}/>
                <main className="container mx-auto p-4 text-theme-silk [counter-reset:section_0]"
                >
                    <Hero/>
                    <About/>
                    <Projects/>
                    <Contact/>
                </main>
            </div>
        </div>
    );
}

