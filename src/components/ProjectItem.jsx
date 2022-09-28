import React from "react";
import {SiGithub} from "react-icons/si";

import Tag from "./Tag";

export default function ProjectItem(props) {
    const item = props.item;

    return (
        <li key={item.id}
            className={`flex ${item.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse space-x-reverse md:space-x-reverse'} lg:flex-col space-x-8 md:space-x-16 lg:space-x-0 text-center`}>
            <div className="w-2/5 lg:w-auto">
                <a href={item.github}>
                    <div
                        className={`h-40 lg:h-72 w-full bg-gray-500 bg-opacity-10 relative flex items-center justify-center mb-2`}>
                        <SiGithub size={70}/>
                        <img src={`${item.imgPath}`} alt={item.name}
                             className="w-full object-bottom border-4 mb-4 h-40 lg:h-72 object-cover hover:brightness-75 hover:opacity-20 transition-opacity duration-150 absolute top-0 left-0"
                        />
                    </div>
                </a>
                {item.tags && item.tags.map((el, ix) => <Tag name={el} key={ix}/>)}
            </div>
            <div className="w-3/5 lg:w-auto flex flex-col items-center justify-center">
                <a href={item.github}><h3
                    className="text-2xl font-semibold text-center lg:mt-8 mb-4 underline underline-offset-8 text-theme-lighter hover:text-theme-light transition-all duration-150 shadow-glow">{item.name}</h3>
                </a>
                <span className="font-sans-2 text-lg">{item.description}</span>
            </div>
        </li>)
}