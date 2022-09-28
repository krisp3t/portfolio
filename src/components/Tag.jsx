import React from "react";
import {SiReact, SiChakraui, SiWordpress, SiBootstrap, SiJavascript} from "react-icons/si";

const colors = {
    "blue": "bg-blue-200 text-blue-800",
    "yellow": "bg-yellow-200 text-yellow-800",
    "green": "bg-green-200 text-green-800",
    "red": "bg-red-200 text-red-800",
    "purple": "bg-purple-200 text-purple-800",
}

const look = {
    "react": [<SiReact/>, colors["blue"]],
    "chakra ui": [<SiChakraui/>, colors["green"]],
    "wordpress": [<SiWordpress/>, colors["purple"]],
    "bootstrap": [<SiBootstrap/>, colors["red"]],
    "javascript": [<SiJavascript/>, colors["yellow"]],
}

export default function Tag(props) {
    const icon = (props.name.toLowerCase() in look) ? look[props.name.toLowerCase()][0] : "";
    const color = (props.name.toLowerCase() in look) ? look[props.name.toLowerCase()][1] : "";

    return (<span
        className={`inline-flex items-center align-middle text-xs font-medium mr-2 px-2.5 py-0.5 my-0.5 rounded ${color}`}><span
        className="mr-1.5">{icon}</span>
        <span>{props.name}</span></span>)
}