import React from "react";


export default function AboutSkills(props) {
    return (
        <ul className="list-none text-lg flex flex-wrap">
            {props.skills && props.skills.map((el, i) => <li key={i} className="basis-1/3 flex justify-center"><span
                className="flex items-center space-x-3 text-theme-lighter">{el[1]}<p
                className="text-gray-100">{el[0]}</p></span></li>)}
        </ul>
    );
}