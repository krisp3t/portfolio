import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div
            className="w-full bg-gradient-to-b from-theme-primary to-theme-secondary min-h-screen">
            <Nav/>
            <main className="container mx-auto p-4 text-gray-100 [counter-reset:section_0]">
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>
            </main>
        </div>
    );
}

export default App;
