import React from "react";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectItem from "./ProjectItem";
import projectList from "../projects/projects.json";

export default function Projects() {
    return (<Section id="projects">
        <SectionHeading>Projects</SectionHeading>
        <ul className="grid grid-cols-1 lg:grid-cols-3 space-y-24 lg:space-y-0 lg:gap-10">
            {projectList.map(el => <ProjectItem item={el} key={el.id}/>)}
        </ul>
    </Section>);
}