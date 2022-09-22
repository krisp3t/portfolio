import React from "react";

export default function Button(props) {
    const icon = <span className="mr-1 -ml-2">{props.icon}</span>
    return (
        <a href={props.link}>
            <button
                className={`${props.className} border border-theme-silk w-fit px-4 py-2 rounded-3xl flex items-center`}
                ref={props.href}>
                {icon}{props.children}</button>
        </a>
    );
}