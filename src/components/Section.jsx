import React from "react";

export default function Section(props) {
    return (<div className="container pb-40 xl:mx-auto px-16 lg:px-32 font-sans text-xl" id={props.id}>
        {props.children}
    </div>)
}