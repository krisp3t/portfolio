import React from "react";
import kris from "../images/kris.jpg";

export default function Hero() {
    return (
        <section className="w-full h-full flex flex-col-reverse md:flex-row pb-40">
            <div className="m-auto flex flex-col text-theme-silk">
                <h3 className="text-2xl mb-4">Hi, my name is</h3>
                <h1 className="text-5xl text-theme-lighter mb-8 font-semibold -ml-1 underline underline-offset-8 decoration-2 decoration-theme-lighter/70">Kristijan
                    Petrič.</h1>
                <h2 className="text-2xl">I build things for the web.</h2>
            </div>
            <div className="m-auto md:ml-auto border-4 border-theme-silk">
                <img src={kris} alt="Portrait of me" width="300"/>
            </div>
        </section>
    )
}