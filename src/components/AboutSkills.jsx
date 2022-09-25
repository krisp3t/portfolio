import React from "react";


export default function AboutSkills(props) {
    return (
        <ul className="list-none text-xl flex flex-wrap font-sans">
            {props.skills && props.skills.map((el, i) => <li key={i} className="basis-1/3 flex justify-center"><span
                className="flex items-center space-x-3 text-theme-lighter">{el[1]}<p
                className="text-theme-silk">{el[0]}</p></span></li>)}
        </ul>
    );
}