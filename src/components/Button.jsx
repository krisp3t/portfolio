import React from "react";

export default function Button(props) {
    const icon = props.icon ? <span className="mr-1 -ml-2">{props.icon}</span> : null;
    return (
        <a href={props.link}>
            <button
                // className={`${props.className ?? ""} border border-theme-silk w-fit px-4 py-2 rounded-3xl flex items-center`}
                className={`${props.className ?? ""} bg-gray-700 text-gray-100 border border-gray-600 focus:border-theme-light hover:bg-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center`}
                type={props.type}
            >
                {icon}{props.children}</button>
        </a>
    );
}