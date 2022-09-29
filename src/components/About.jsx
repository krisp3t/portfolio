import React from "react";
import {GrMysql} from "react-icons/gr";
import {SiJavascript, SiReact, SiPhp, SiCss3, SiWordpress} from "react-icons/si";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import AboutSkills from "./AboutSkills";

const skills = [['JavaScript (ES6+)', <SiJavascript/>], ['React', <SiReact/>], ['PHP', <SiPhp/>], ['CSS (& Tailwind)',
    <SiCss3/>], ['WordPress', <SiWordpress/>], ['MySQL', <GrMysql/>]];

export default function About() {
    return (
        <Section id="about">
            <SectionHeading>About Me</SectionHeading>
            <div className="space-y-4 font-sans-2">
                <p>
                    Hello! My name is Kristijan Petrič and I'm passionate about creating web applications and crafting the perfect user experience.
                </p>
                <p>
                    I'm currently based in Ljubljana, Slovenia 🇸🇮, where I study computer science.
                </p>
            </div>
            <h3 className="font-semibold text-2xl text-center mt-16 mb-4 text-theme-lighter font-sans">I'm experienced
                in:</h3>
            <AboutSkills skills={skills}></AboutSkills>
        </Section>);
}