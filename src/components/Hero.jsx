import React from "react";
import kris from "../images/kris.png";

export default function Hero() {
    return (
        <main className="w-full flex flex-col-reverse md:flex-row">
            <div className="m-auto flex flex-col">
                <h3 className="text-xl font-mono mb-2 font-semibold">Hi, my name is</h3>
                <h1 className="text-5xl text-theme-light mb-6 font-semibold -ml-1">Kristijan Petrič.</h1>
                <h2 className="text-2xl text-theme-light opacity-50 italic">I build things for the web.</h2>
            </div>
            <div className="mx-auto md:ml-auto">
                <img src={kris} alt="Portrait drawing of me" width="400"/>
            </div>
        </main>
    )
}