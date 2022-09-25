import React from "react";

export default function Button(props) {
    const icon = props.icon ? <span className="mr-2">{props.icon}</span> : null;
    return (
        <a href={props.link}>
            <button
                className={`${props.className ?? ""} bg-gray-700 text-gray-100 border border-gray-600 focus:border-theme-light hover:bg-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-4 py-2.5 flex items-center transition-all duration-150`}
                type={props.type}
            >
                {icon}{props.children}</button>
        </a>
    );
}