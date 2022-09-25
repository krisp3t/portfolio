import React from "react";

import Tag from "./Tag";

export default function ProjectItem(props) {
    const item = props.item;

    return (<li key={item.id}>
        <a href={item.github}>
            <img src={`${item.imgPath}`} alt={item.name}
                 className="w-full object-bottom border-4 mb-4 h-72 object-cover hover:brightness-75"
            />
        </a>
        {item.tags && item.tags.map((el, ix) => <Tag name={el} key={ix}/>)}
        <a href={item.github}><h3
            className="text-3xl font-semibold text-center mt-8 mb-4 underline underline-offset-8 text-theme-lighter hover:text-theme-light">{item.name}</h3>
        </a>
        <span className="font-sans-2">{item.description}</span>
    </li>)
}

/* TODO: tags */