import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Hero from "./components/Hero";

function App() {
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-gray-900 to-theme-primary">
            <Nav/>
            <div className="container mx-auto p-4 text-gray-100">
                <Hero/>
            </div>
        </div>
    );
}

export default App;
