import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
    return (
        <div
            className="w-full bg-gradient-to-b from-theme-primary to-theme-secondary min-h-screen">
            <Nav/>
            <main className="container mx-auto p-4 text-gray-100">
                <Hero/>
                <About/>
            </main>
        </div>
    );
}

export default App;
