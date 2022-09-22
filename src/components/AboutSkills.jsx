import React from "react";


export default function AboutSkills(props) {
    return (
        <ul className="font-mono list-none text-lg">
            {props.skills && props.skills.map((el, i) => <li key={i}><span
                className="flex items-center space-x-3 text-theme-lighter">{el[1]}<p
                className="text-gray-100">{el[0]}</p></span></li>)}
        </ul>
    );
}