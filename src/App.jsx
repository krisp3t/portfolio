import React, {useEffect, useState} from 'react';

import './App.css';
import Nav from './components/Nav'
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <div
            className="w-full bg-gradient-to-b from-theme-primary to-theme-secondary min-h-screen bg-fixed"
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
    );
}

