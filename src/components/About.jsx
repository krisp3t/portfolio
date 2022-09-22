import React from "react";
import {GrMysql} from "react-icons/gr";
import {SiJavascript, SiReact, SiPhp, SiCss3, SiWordpress} from "react-icons/si";

import SectionHeading from "./SectionHeading";
import AboutSkills from "./AboutSkills";

const skills = [['JavaScript (ES6+)', <SiJavascript/>], ['React', <SiReact/>], ['PHP', <SiPhp/>], ['CSS (& Tailwind)',
    <SiCss3/>], ['WordPress', <SiWordpress/>], ['MySQL', <GrMysql/>]];

export default function About() {
    return (
        <section className="container pb-32 xl:mx-auto px-32" id="about">
            <SectionHeading>About Me</SectionHeading>
            <div className="space-y-4">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos doloremque explicabo iusto,
                    laudantium maxime non perferendis quasi repellat, sequi sint tempora, totam! Accusamus aut autem
                    commodi
                    consequatur consequuntur cum delectus deserunt doloremque dolores et, eum eveniet expedita facilis
                    hic,
                    itaque, laudantium magnam magni neque perspiciatis placeat qui quos repellat?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aut commodi, consectetur culpa
                    dolore fuga iure nesciunt perferendis recusandae repellendus sunt tempora veniam, veritatis
                    voluptatem
                    voluptatum? Delectus deserunt doloribus enim fuga illum incidunt ipsam ipsum iusto nemo nostrum
                    obcaecati officiis possimus praesentium, quam reiciendis rerum sed ullam voluptatum? Perspiciatis,
                    quia.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis dolorum eligendi maiores,
                    nihil quaerat quis saepe sunt suscipit tenetur. Ab cumque delectus deleniti dicta explicabo impedit
                    libero perferendis possimus!
                </p>
            </div>
            <h3 className="font-semibold text-xl text-center mt-8 mb-4 text-theme-lighter">I'm experienced in:</h3>
            <AboutSkills skills={skills}></AboutSkills>
        </section>);
}