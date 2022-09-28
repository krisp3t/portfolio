import React from "react";


export default function AboutSkills(props) {
    return (
        <ul className="list-none text-xl flex flex-col md:flex-row md:flex-wrap font-sans gap-y-4">
            {props.skills && props.skills.map((el, i) => <li key={i}
                                                             className="md:basis-1/3 flex justify-center text-xl"><span
                className="flex items-center space-x-4 text-theme-lighter">{el[1]}<p
                className="text-theme-silk">{el[0]}</p></span></li>)}
        </ul>
    );
}