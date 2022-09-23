import React from "react";

export default function ProjectItem(props) {
    const item = props.item;

    return (<li key={item.id}>
        <div className="h-72 border-4">
            <img src={`${item.imgPath}`} alt={item.name} className="max-h-full w-full object-cover"/>
        </div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
    </li>)
}