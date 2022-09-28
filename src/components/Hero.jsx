import React from "react";

import Button from "./Button";
import kris from "../images/kris.jpg";
import {CgChevronDoubleDown} from "react-icons/cg";


export default function Hero() {
    return (
        <section
            className="p-8 w-full h-[80vh] lg:h-[60vh] xl:h-[80vh] pt-4 xl:pb-32 flex flex-col-reverse xl:flex-row landscape:flex-row items-center justify-center xl:space-x-40 landscape:space-x-20"
            id="hero">
            <div
                className="flex flex-col text-theme-silk items-center justify-center xl:items-start landscape:items-start justify-center h-3/5 xl:h-auto landscape:h-auto">
                <h3 className="text-3xl md:text-4xl mb-4">Hi, my name is</h3>
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-theme-light to-theme-lighter pb-12 underline underline-offset-8 decoration-2 decoration-theme-light shadow-glow theme">Kristijan
                    Petrič.</h1>
                <h2 className="text-2xl md:text-2xl">I build things for the web.</h2>
                <Button className="mt-4 text-lg" icon={<CgChevronDoubleDown/>} link="#about">Scroll for more</Button>
            </div>
            <div className="relative h-2/5 xl:h-auto landscape:h-auto">
                <img src={kris} alt="Portrait of me" width="300"
                     className="z-20 relative border-4 border-theme-silk drop-shadow-2xl max-w-full max-h-full object-cover"/>
                <div
                    className="w-full h-full absolute bg-theme-light top-5 left-5 z-10 drop-shadow-2xl"></div>
            </div>
        </section>
    )
}