import React from "react";

export default function SectionHeading(props) {
    return (
        <h2 className="text-3xl pb-10 items-center flex after:border after:h-px after:relative after:w-56 after:block after:ml-4 before:relative before:[counter-increment:section_1] before:content-['0'_counter(section)'.'] before:mr-2 before:text-theme-lighter">{props.children}</h2>
    )
}