import React from "react";

export default function Button(props) {
    const icon = props.icon ? <span className="mr-1 -ml-2">{props.icon}</span> : null;
    return (
        <a href={props.link}>
            <button
                className={`${props.className ?? ""} bg-gray-700 text-gray-100 border border-gray-600 focus:border-theme-light hover:bg-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 flex items-center text-lg`}
                type={props.type}
            >
                {icon}{props.children}</button>
        </a>
    );
}