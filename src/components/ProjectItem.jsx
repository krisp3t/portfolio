import React from "react";
import {SiGithub} from "react-icons/si";

import Tag from "./Tag";

export default function ProjectItem(props) {
    const item = props.item;
    console.log(<SiGithub/>);

    return (<li key={item.id}>
        <a href={item.github}>

            <div
                className={`mb-4 h-72 w-full bg-gray-500 bg-opacity-10 relative flex items-center justify-center`}>
                <SiGithub size={70}/>
                <img src={`${item.imgPath}`} alt={item.name}
                     className="w-full object-bottom border-4 mb-4 h-72 object-cover hover:brightness-75 hover:opacity-20 transition-opacity duration-150 absolute top-0 left-0"
                />
            </div>
        </a>
        {item.tags && item.tags.map((el, ix) => <Tag name={el} key={ix}/>)}
        <a href={item.github}><h3
            className="text-3xl font-semibold text-center mt-8 mb-4 underline underline-offset-8 text-theme-lighter hover:text-theme-light transition-all duration-150 shadow-glow">{item.name}</h3>
        </a>
        <span className="font-sans-2">{item.description}</span>
    </li>)
}