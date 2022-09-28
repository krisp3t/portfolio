import React from "react";

export default function Section(props) {
    return (<div className="container pt-36 xl:mx-auto px-8 lg:px-32 font-sans text-xl" id={props.id}>
        {props.children}
    </div>)
}