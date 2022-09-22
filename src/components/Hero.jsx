import React from "react";

import Button from "./Button";
import kris from "../images/kris.jpg";
import {CgChevronDoubleDown} from "react-icons/cg";


export default function Hero() {
    return (
        <section className="w-full h-[90vh] flex flex-col-reverse md:flex-row pb-52" id="hero">
            <div className="m-auto flex flex-col text-theme-silk">
                <h3 className="text-4xl mb-4">Hi, my name is</h3>
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-theme-light to-theme-lighter pb-12 underline underline-offset-8 decoration-2 decoration-theme-light shadow-glow theme">Kristijan
                    Petrič.</h1>
                <h2 className="text-2xl">I build things for the web.</h2>
                <Button className="mt-4" icon={<CgChevronDoubleDown/>} link="#about">Scroll for more</Button>
            </div>
            <div className="m-auto md:ml-auto relative">
                <img src={kris} alt="Portrait of me" width="300"
                     className="z-20 relative border-4 border-theme-silk drop-shadow-2xl"/>
                <div
                    className="w-full h-full absolute bg-theme-primary top-20 left-20 z-10 drop-shadow-2xl"/>
            </div>
        </section>
    )
}